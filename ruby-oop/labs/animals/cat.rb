require "./animals.rb"

class Cat < Animals
   def eat
    p "Fish is yummy!"
   end
end

c = Cat.new("Joe", "Red")

p c.name
p c.color
c.eat
c.walk