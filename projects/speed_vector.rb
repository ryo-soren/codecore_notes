# Create speed_vector

hash = {}

for number in (1..5)
    p "Speed ('slow', 'medium', 'fast') :"
    speed = gets.chomp
    hash[number] = speed
end

hash.each do |key, value|
    p "Analyst #{key} is #{value}"
end