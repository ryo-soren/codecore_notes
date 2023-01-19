#prompt user for multiplication result
puts "Please enter a number"
number_1 = gets.chomp.to_i
puts "Please enter another number"
number_2 = gets.chomp.to_i
puts number_1 * number_2

#if else example
puts "what model year is your car?"
year = gets.chomp.to_i
if year <= 1
    puts "your car is the future"
elsif year > 2 && year < 5
    puts "car is new"
elsif year == 6
    puts "good year"
else
    puts "car is old"
end

#while loop 
counter = 1
while counter<11
    puts "I'm a counter at #{counter}"
    counter += 1
end
# until counter > 5
#     print "this is the until loop at counter: #{counter}"
#     counter += 1
# end
# ^ can use until instead of while

# Write code that keeps asking for user input
sum = 0
puts "Enter a number to add up to a sum, or type exit for the sum"
input = gets.chomp
until input == "exit"
    puts "Enter a number to ad up to a sum, or type exit for the sum"
    num = input.to_i
    sum += num
    input = gets.chomp
end
puts "Sum is #{sum}"

#break
puts "How many times should I loop?"
num = gets.to_i
i = 0
while i < num
    puts "Hello #{i}"
    i += 1
    break if i > 5
end

# Loop do
x = 0
loop do
    puts x
    x += 1
    break if x == 13
end
