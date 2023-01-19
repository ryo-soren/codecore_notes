class Bone
    attr_accessor :size
    def initialize(size)
        @size = size
    end
    def details
        return @size
    end
end
