arr = ['a','b','c','d']
for element in arr do
    print element
end
print "\n"

arr2 = [1,2,3,4,5,6,7]
arr2.each do |x|
    y = x*2
    p y
end
print "\n"

#buld, loop, print
arr3 = [1,2,3,4,5]
arr3.each do |x|
    y = x**2
    p y
end
print "\n"

['a','b',2,'d', false].map do |element|
    p element
end
print "\n"

['a','b',2,'d', false].map.with_index do |element, index|
	p "element: #{element}, index: #{index}"
end
print "\n"
# printing multiple dimensions

multi_arr = [[1,7,3], [4,4,6], [7,2,9]]
multi_arr.each do|sub_arr|
    sub_arr.each do |val|
        p val**2
    end
end
print "\n"
