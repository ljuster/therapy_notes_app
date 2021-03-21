class Patient < User
  has_many :groups

  validates :first_name, presence: true
  validates :gender, presence: true, inclusion: %w(male female)

  def patient?
    true
  end

end
