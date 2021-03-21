class Location < ApplicationRecord
  validates_presence_of :name

  has_many :groups
end
