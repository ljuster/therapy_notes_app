class Group < ApplicationRecord
  belongs_to :location

  enum state: { active: 0, inactive: 1 }
  delegate :address, to: :location, allow_nil: true

end
