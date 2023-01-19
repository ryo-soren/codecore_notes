str = "Hello, Awesome CodeCore Students"
new_sentence = str.split(' ').map.with_index do |word, index|
    if index % 2 == 0
        word.upcase! # <- ! permanently mutates
    else
        word.downcase!
    end
    word #<- returned and added to aray
end
p new_sentence.join(" ")