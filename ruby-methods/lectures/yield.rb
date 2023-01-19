def my_yield_method
    p "i'm a yield method"
    yield if block_given?
    puts goodbye
end

my_yield_method {p "Hello world"}

my_yield_method do
    puts "I'm a block"
endc