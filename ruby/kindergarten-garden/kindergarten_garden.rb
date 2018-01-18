class Garden

  def initialize(diagram, students = default_children)
    @pots = parse(diagram)
    @students = students.sort
    assign_pots
  end

end
