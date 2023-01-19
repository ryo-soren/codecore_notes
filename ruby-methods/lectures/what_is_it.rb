def what_is_it(thing)
    if[String, Array, Integer].include?(thing.class)
        thing.class
    else
        "something else"
    end
end

p what_is_it"string"