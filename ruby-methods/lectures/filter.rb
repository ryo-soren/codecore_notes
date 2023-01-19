def filter(arr)
    new_array = []
    for val in arr
        return p "no block given" unless block_given?
        result = yield(val)
        if result
            new_array << val
    end
    new array
end

filter()