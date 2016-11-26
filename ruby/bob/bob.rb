class Bob

  def hey(what)
    what.strip!
    require "pry"
    binding.pry

  end
end
