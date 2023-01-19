# # solution 1 

names = []

puts "Enter the names to capitalize and enter 'Exit' when done"

while name = gets.chomp
    puts "Enter the names to capitalize and enter 'Exit' when done"
    if name == "exit"
        break
    else
        names << name
    end
end
print "\n"
names.each do |x|
    p x.capitalize
end

# solution 2 

names = []
p "type in name"
name = gets.chomp
while name != "exit"
    p "type in name"
    names << name.capitalize
    name = gets.chomp
end

p names