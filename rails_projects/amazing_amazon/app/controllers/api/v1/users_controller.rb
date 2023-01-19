class Api::V1::UsersController < Api::ApplicationController

    def current
        puts "******CURRENT USER USER CONTROLLER"
        puts current_user
        puts "******CURRENT USER USER CONTROLLER"
        render(json: current_user)
    end

    def create
        user = User.new(user_params)

        if user.save!
            session[:user_id] = user.id
            render(
                json: {id: user.id}
            )
        else
            render(
                json: {error: user.errors.messages},
                status: 422
            )
        end
    end

    private

    def user_params
        params.require(:user).permit(
            :first_name, 
            :last_name, 
            :email, 
            :password,
            :password_confirmation
        )
    end
end
