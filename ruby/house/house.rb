module House
  def self.recite
  "#{(1..@@parts.length).map { |i| verse(i) }.join("\n\n")}\n"
end

  @@parts = [
    [""            ,  "horse and the hound and the horn"],
    ["belonged to" ,  "farmer sowing his corn"],
    ["kept"        ,  "rooster that crowed in the morn"],
    ["woke"        ,  "priest all shaven and shorn"],
    ["married"     ,  "man all tattered and torn"],
    ["kissed"      ,  "maiden all forlorn"],
    ["milked"      ,  "cow with the crumpled horn"],
    ["tossed"      ,  "dog"],
    ["worried"     ,  "cat"],
    ["killed"      ,  "rat"],
    ["ate"         ,  "malt"],
    ["lay in"      ,  "house that Jack built."]
  ]
end
