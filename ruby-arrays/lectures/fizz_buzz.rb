results = []

for num in 1..100
    str = ''
    str << "FIZZ" if num % 3 == 0
    str << "BUZZ" if num % 5 == 0
    str << num.to_s if str.length <= 0 # if the string is empty, it meands it was not divisible by 3 or 5
    results << str
end

p results
