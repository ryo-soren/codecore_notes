class Animals
    attr_accessor :name, :color

    def initialize(name, color)
        @name = name
        @color = color
    end

    def eat
        p "I'm eating"
    end

    def walk
        p "I'm walking"
    end
end

a = Animals.new("Name", "Black")

# p a.name
# p a.color
# a.eat
# a.walk