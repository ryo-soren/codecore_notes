module HelperMethods
    def name_display
        name.squeeze(" ").capitalize
    end
end

class User
    attr_accessor :name
    include HelperMethods
end

class Car 
    attr_accessor :name
    include HelperMethods
end

u = User.new
u.name = 'Steph'

puts u.name_display