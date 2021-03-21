module Slugging
  extend ActiveSupport::Concern

  included do
    before_create :generate_slug

    def self.find_by_id_or_slug(id)
      find_by_ids_or_slugs([id]).first
    end

    def self.find_by_ids_or_slugs(ids)
      slugs = ids.select { |id| id =~ /[a-zA-Z]/ }
      ids -= slugs

      # Some legacy slugs still have all digits and overflow the id column
      overflow = ids.select { |id| id.to_i >= 2**31 }
      ids -= overflow
      slugs += overflow

      t = arel_table
      where(t[:id].in(ids.map(&:to_i)).or(t[:slug].in(slugs.map(&:to_s))))
    end
  end

  def to_s
    self.slug.to_s
  end

  def to_param
    slug
  end

  def generate_slug
    # In order for line 12 to reliably identify slugs, they must contain some letters
    # which is not guaranteed by simply calling SecureRandom.hex.
    self.slug ||= "af#{SecureRandom.hex(6)}"
  end
end
