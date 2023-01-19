class Dog 
    attr_accessor :colour, :type

    def initialize(colour, type)
        @colour = colour
        @type = type
        @capacity = 3
        @bones = []
    end

    def give(bone)

        if @bones.length == @capacity
            p "I have too many bones"
        else
            @bones.push(bone)
        end
    end

    def eat
        if @bones.length > 0
            bone = @bones.pop()

            if bone.details > 8
                p "yummy! I ate a 'big' bone"

            elsif bone.details < 8 && bone.details > 3
                p "yummy! I ate a 'normal' bone"
            else
                p "yummy! I ate a 'small' bone"
            end
        else
            p "I have no bones"
        end
    end
end