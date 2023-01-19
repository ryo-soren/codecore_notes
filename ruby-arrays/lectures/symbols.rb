p "hello".to_sym #this will change it into a symbol
p :hello.to_s #this will change into a string

:i_am_a_symbol
# :i-am-not-a-symbol => invalid
# :"this can also work" => valid but not good practise

:hello #symbol of hello

students = {
    lisa: 30
    #:lisa => 30
}

grades = {
    "Jane Doe" => 10,
    "Jim Doe" => 15,
    :lisa => 12
}

grades[:lisa] = 20

p grades[:lisa]

personal = {
    name: "Steph",
    job: "instructor",
    career: "web development"
}

