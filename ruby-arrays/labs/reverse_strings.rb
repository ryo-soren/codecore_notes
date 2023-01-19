greeting = "hello"

split_array = greeting.split("")
reversed_array = []

split_array.map do |letter, index|
    reversed_array << split_array[split_array.length-index+1]
    iterator += 1
end

p reversed_array.join("")