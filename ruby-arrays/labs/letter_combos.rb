string = "123456"

arr_string = string.split("")
arr_combo = []
p arr_string

arr_string.map.with_index do |element, index|
    break if index+1 == arr_string.length 
    arr_combo.push("#{element}#{arr_string[index+1]}")
end
p arr_combo