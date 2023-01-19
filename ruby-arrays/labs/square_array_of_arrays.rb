array = [[2,3,4], [5,6,7], [6,7,8]]
squared_array = []

array.map do |arr|
    nested = []
    arr.map do |element| 
        nested << element ** 2
    end
    squared_array << nested
end

p squared_array