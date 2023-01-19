require "minitest/autorun"
require "./Circle.rb"

class CircleTest < MiniTest::Test
    def test_area1
        # GIVEN
        circle = Circle.new(5)
        # WHEN
        area = circle.area
        # THEN
        assert_in_delta(area, 78.54, 0.01)
    end

    def test_area2
        # GIVEN
        circle = Circle.new(7.5)
        # WHEN
        area = circle.area
        # THEN
        assert_in_delta(area, 176.71, 0.01)
    end

    def test_area3
        # GIVEN
        circle = Circle.new(5)
        # WHEN
        area = circle.area
        # THEN
        assert_in_delta(area, 78.54, 0.01)
    end

    def test_perimeter1
        assert_in_delta(Circle.new(4).perimeter, 25.13, 0.01)
    end

    # def test_perimeter2

    # end

    # def test_perimeter3

    # end


end