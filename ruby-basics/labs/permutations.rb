puts "Enter 3 characters, press 'return' for each entry"

char1 = gets.chomp.to_s
char2 = gets.chomp.to_s
char3 = gets.chomp.to_s

arr = char1+char2+char3

index = 0


for index1 in 0..2
    for index2 in 0..2
        for index3 in 0..2
            print(arr[index1], arr[index2], arr[index3])
            puts""
        end
    end
end


