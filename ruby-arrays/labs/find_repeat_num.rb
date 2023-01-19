hash_of_repeats = {}
# array = (1..1000000).to_a
array = [1,2,3,4,5,6,7,5,8,9,1]

array.each do |number|
    symbol = number.to_s
    if hash_of_repeats[symbol.to_sym]
        hash_of_repeats[symbol.to_sym] += 1
    else
        hash_of_repeats[symbol.to_sym] = 1
    end
end

p hash_of_repeats