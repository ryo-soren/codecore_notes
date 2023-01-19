def most_common_letter(string)
    hash_of_char = {}
    filtered_string = string.gsub(/[^a-zA-Z0-9]/, "")
    filtered_string.split("").each {|char| hash_of_char[char]? 
    hash_of_char[char] += 1 : hash_of_char[char] = 1}

    max = filtered_string[0]
    hash_of_char.each_key do |key|
        if (hash_of_char[max] < hash_of_char[key])
            max = key
        end
    end
    p max
end

most_common_letter("aaaabbc") # => "a"
most_common_letter("T a d c g d g d d n") # => "d" 
most_common_letter("1111 monkeys on the wall") # => "1" 