class Cookie

    def initialize(sugar=1, flour=2)
        p "You are in the initialized method"
        @sugar = sugar
        @flour = flour
        @@colour = "Brown"
    end

    #getter method
    def sugar
        @sugar
    end

    def flour
        @flour
    end

    def self.info
        p "Cookies are essential to a balanced diet!"
    end

    def eat
        p "nom nom nom"
    end
    
    def bake_n_eat
        bake()
        eat()
    end

    def details
        p "Cookie details: sugar - #{@sugar}, flour - #{@flour}, colour - #{@@colour}"
    end

    private

    def bake
        p "Baking the cookie"
    end
end

# c = Cookie.new

# # c.bake
# c.eat

# Cookie.info
# c2 = Cookie.new(4,8)
# c.details
# c2.details
