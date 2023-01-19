def map(arr)
    output = []
    for val in arr
        output << yield(val)
    end
    p output
end
