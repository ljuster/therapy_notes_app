class Group < ApplicationRecord

  belongs_to :location

  delegate :address, to: :location, allow_nil: true

end
