class FizzBuzz

    attr_accessor :x, :y

    def initialize(x,y)
        @x = x
        @y = y
    end

    def run
        fizz_buzz_arr = []
        for num in (1..100)
            num % @x == 0 ? (num % @y == 0 ? fizz_buzz_arr.push("fizzbuzz") : fizz_buzz_arr.push("fizz")) : (num % @y == 0 ? fizz_buzz_arr.push("buzz") : fizz_buzz_arr.push(num))
        end
        p fizz_buzz_arr
    end
end

fb = FizzBuzz.new(3,5)

fb.run
puts "\n"
fb.x = 2
fb.y = 3
fb.run

