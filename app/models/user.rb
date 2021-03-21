class User < ApplicationRecord

  # Includes
  include Slugging # Concern: handles assiging user slugs and associated finders
  include Nameable

  PASSWORD_REGEX = /\A(?=.*[A-Z])(?=.*\d).{8,}/ # At least one uppercase letter and one digit, >= 8 characters in length
  # Regex prevents parentheses and other non-name characters. Allows
  # for names with accents, periods, commas, hyphens, apostrophes,
  # and spaces. Does not allow for any other special characters.
  VALID_NAME_FORMAT = /\A[[:alpha:]\s.,'-]*\z/i

  # Validations
  validates_format_of :email, with: /\A[^@\s]+@([^@.\s]+\.)+[^@.\s]+\z/, allow_blank: true # => /.+@.+\..+/ allows mail like @@.@ to be vaild

  # Search
  # multisearchable against: [:email,
  #                           :mobile_phone_number,
  #                           :full_name,
  #                           :home_address]
  #
  # pg_search_scope :search_by_type,
  #                 against: {
  #                   first_name: 'A',
  #                   last_name: 'B',
  #                   mobile_phone_number: 'C',
  #                   email: 'D'
  #                 },
  #                 using: { tsearch: { prefix: true } }

  def patient?
    false
  end

  def first_name_valid?
    # Can be overwritten in subclasses if users have different
    # rules for validating their names
    return false unless first_name

    !!first_name.match(VALID_NAME_FORMAT)
  end

  def last_name_valid?
    # Can be overwritten in subclasses if users have different
    # rules for validating their names
    return false unless last_name

    !!last_name.match(VALID_NAME_FORMAT)
  end

end
