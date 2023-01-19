class Dog 

    def initialize
        @capacity = 3
        @bones = []
    end

    def give_bone(bone)

        if @bones.length == @capacity
            p "I have too many bones"
        else
            @bones.push(bone).length
        end
    end

    def eat_bone
        @bones.pop()
    end

    def bone_count
        @bones.length
    end
end