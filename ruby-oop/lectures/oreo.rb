require './cookie.rb'
#the above requires the whole cookie.rb file
#we need this to access the Cookie class

class Oreo < Cookie
    attr_accessor :filling_type

    def eat
        p "Munch munch munch!"
        super
    end
end

oc = Oreo.new

p oc.sugar
oc.bake_n_eat
oc.filling_type = "cream"
p oc.filling_type


