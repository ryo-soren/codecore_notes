def find_min(*number)
    number.reduce do |x, current_value|
        if (x>current_value)
            current_value
        else
            x
        end
    end
end

p (find_min(20,40,12,17,10,35)) # 10


