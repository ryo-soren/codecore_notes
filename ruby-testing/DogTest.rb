require "minitest/autorun"
require "./Dog.rb"

class DogTest < MiniTest::Test

    def setup 
        @dog = Dog.new
        @dog.give_bone("small")
    end

    def test_give_bone
        give1 = @dog.give_bone("small")
        give2 = @dog.give_bone("small")
        assert_equal(3, give2)
    end

    def test_eat_bone
        eat = @dog.eat_bone
        assert_equal("small", eat)
    end

    def test_bone_count
        give = @dog.give_bone("small")
        give2 = @dog.give_bone("small")
        eat = @dog.eat_bone
        count = @dog.bone_count
        assert_equal(2, count)
    end
end