def reduce(arr, init)
    total = init
    for element in arr
            p total
            total = yield(total, element)
    end
    if total.class == String
        p total.strip
    else
        p total
    end
end
reduce(["This", "is", "my", "sentence"], "") { |sentence, word| sentence + " " + word }