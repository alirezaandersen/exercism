class Bob
  def hey(remark)
    remark.strip!
    remark.strip!
    return 'Fine. Be that way!' if remark == ""
    return 'Whoa, chill out!' if remark =~ /^[^a-z]+$/ and remark =~ /[A-Z]/
    return 'Sure.' if remark[-1, 1] == '?'
    return "Whatever."
  end
end
