def get_user_info
    hash_info = {}
    p "First name:"
    hash_info["first_name".to_sym] = gets.chomp.to_s
    p "Last name:"
    hash_info["last_name".to_sym] = gets.chomp.to_s
    p "City of birth:"
    hash_info["city_of_birth".to_sym] = gets.chomp.to_s
    p "Age:"
    hash_info["age".to_sym] = gets.chomp.to_i
    p hash_info
end

get_user_info


