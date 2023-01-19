# titles = []
# puts "Please enter your book title or 'exit' to quit:"
# book_name = gets.chomp.upcase!
# titles << book_name
# while book_name != "EXIT"
#     puts "Please enter your book title or 'exit' to quit:"
#     book_name = gets.chomp.upcase!
#     break if book_name == "EXIT"
#     titles << book_name
# end

# p titles

titles = []
puts "Enter the name of the book and enter 'Exit' when done"

while title = gets.chomp.capitalize!
    puts "Enter the name of the book and enter 'Exit' when done"
    if title == "Exit"
        break
    else
        titles << title
    end
end

p titles.sort