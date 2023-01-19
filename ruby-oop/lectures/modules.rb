#Namespace for Ruby Modules

module Computer
    class Apple
        def initialize(model)
            p "new Apple computer initialized"
        end
    end
end

module Fruit
    class Apple
        def initialize(type, color)
            p "new fruit apple initialized"
        end
    end
end

macOs = Computer::Apple.new('imac')
gala = Fruit::Apple.new('gala', 'red')