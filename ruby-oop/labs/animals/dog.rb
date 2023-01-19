require "./animals.rb"

class Dog < Animals
   def bark
    p "Woof"
   end

   def eat
    p "Bones are yummy!"
   end
end

d = Dog.new("Joe", "Red")

p d.name
p d.color
d.bark
d.eat
d.walk