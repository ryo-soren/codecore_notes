def frequency_of_numbers(array)
    hash_of_char = {}
    puts array.each {|char| hash_of_char[char] ? hash_of_char[char] += 1 : hash_of_char[char] = 1}
    puts hash_of_char.sort.to_h
end

frequency_of_numbers([1,2,3,22,4,4,4,2,3,3,3])

