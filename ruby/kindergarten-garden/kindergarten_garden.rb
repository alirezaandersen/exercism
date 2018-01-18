class Garden

  def initialize(diagram, students = default_children)
    @pots = parse(diagram)
    @students = students.sort
    assign_pots
  end

  def default_children
    %w(Alice Bob Charlie David Eve Fred Ginny Harriet Ileana Joseph Kincaid Larry)
  end

end
