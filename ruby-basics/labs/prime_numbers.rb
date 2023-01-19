require "prime"
prime = Prime.take_while{|number| number<100}

puts "How many prime numbers to display?"
prime_numbers = gets.chomp.to_i

for number in 0...prime_numbers
     puts prime[number]
end


# arrOfPrime = []
# counter = 0
# i = 2

# until counter >= prime_numbers
    
#     is_prime = true
#     arrOfPrime.each do |item|
#         if i % item == 0
#             is_prime = false
#             break
#         end
#     end
#     if is_prime
#         arrOfPrime.push(i)
#         counter += 1
#     end
#     i += 1
# end

# puts arrOfPrime