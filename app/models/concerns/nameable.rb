module Nameable
  # Just joins the their first and last names, this is used mostly for search
  def full_name
    [first_name, last_name].join(' ').strip
  rescue
    slug
  end

  ##
  # User display names
  def display_name(full = true)
    if first_name.present? && last_name.present? && full
      [pretty_first_name, pretty_last_name].join(' ')
    elsif first_name.present? && last_name.present?
      pretty_first_name
    elsif first_name.present?
      pretty_first_name
    elsif email.present?
      email
    elsif mobile_phone_number.present?
      mobile_phone_number
    else
      "-"
    end
  end

  def pretty_first_name
    first_name.split(' ').collect { |x| x[0] = x[0].capitalize; x; }.join(' ')
  end

  def pretty_last_name
    last_name.split(' ').collect { |x| x[0] = x[0].capitalize; x; }.join(' ')
  end

  def first_name_last_initial
    "#{pretty_first_name} #{pretty_last_name[0]}."
  end

  def display_name_fields
    %w(first_name last_name mobile_phone_number email)
  end
end
