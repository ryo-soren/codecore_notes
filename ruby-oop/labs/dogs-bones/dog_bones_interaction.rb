require "./bones.rb"
require "./dog.rb"

b1 = Bone.new(10)
b2 = Bone.new(5)
b3 = Bone.new(1)

d = Dog.new('black', 'lab')

d.give(b1)
d.give(b2)
d.give(b3)
d.give(b3)

d.eat
d.eat
d.eat
d.eat