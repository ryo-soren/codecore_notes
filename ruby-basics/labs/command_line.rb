puts "How many sides does a hexagon have?"
puts "1-five \n2-six \n3-seven"
sides = gets.chomp.to_i

puts "What country is largest by population?"
puts "1-China \n2-Canada \n3-Germany"
country = gets.chomp.to_i

puts "Who will win the stanley cup?"
puts "1-The Leafs (🫣) \n2-The Oilers \n3-The Canucks (😎)"
winner = gets.chomp.to_i

if sides.equal?(2) && country.equal?(1) && winner.equal?(3)
    puts "You scored 100%, you got 3 out of 3 questions correctly"
elsif sides.equal?(2) && country.equal?(1)
    puts "You scored 66%, you got 2 out of 3 questions correctly"
elsif sides.equal?(2) && winner.equal?(3)
    puts "You scored 66%, you got 2 out of 3 questions correctly"
elsif country.equal?(1) && winner.equal?(3)
    puts "You scored 66%, you got 2 out of 3 questions correctly"
elsif sides.equal?(2)
    puts "You scored 33%, you got 1 out of 3 questions correctly"
elsif country.equal?(1)
    puts "You scored 33%, you got 1 out of 3 questions correctly"
elsif winner.equal?(3)
    puts "You scored 33%, you got 1 out of 3 questions correctly"
else
    puts "You scored 0%, you got 0 out of 3 questions correctly"
end