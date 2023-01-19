module AwesomeMethods
    def greeting
        p "hello world"
    end
end

class Abc
    include AwesomeMethods
end

a = Abc.new
a.greeting
# Abc.greeting #undefined method

class Xyz 
    extend AwesomeMethods
end

x = Xyz.new

# x.greeting #undefined
Xyz.greeting