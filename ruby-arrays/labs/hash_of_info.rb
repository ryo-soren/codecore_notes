personal_info = {}

puts "First Name: "
fname = gets.chomp.capitalize!
puts "Last Name: "
lname = gets.chomp.capitalize!
puts "City of Birth: "
city = gets.chomp.capitalize!
puts "Age: "
age = gets.chomp

personal_info["first name"] = fname
personal_info["last name"] = lname
personal_info["city of birth"] = city
personal_info["age"] = age

personal_info.each do |key, value|
    puts "Your #{key} is #{value}"
end