class FavouritesController < ApplicationController
    before_action :authenticate_user!   

    def create
        product = Product.find(params[:product_id])
        if !can?(:favourite, product)
            flash[:alert] = "Product owner cannot make his/her item favourite"
            redirect_to product_path(product.id)
        else
            favourite = Favourite.new(user:current_user, product: product)
            if favourite.save
                flash[:notice] = "Added to favourites"
            else
                flash[:alert] = favourite.errors.full_messages.join(', ')
            end
            redirect_to product_path(favourite.product.id)
        end
    end

    def destroy
        p "****** FAVOURITES CONTROLLER"
        p params 
        p "******"
        favourite = Favourite.find(params[:format])
        if favourite.destroy
            flash[:notice] = "Removed from favourites"
        else
            flash[:alert] = favourite.errors.full_messages.join(', ')
        end
        redirect_to product_path(favourite.product.id)
    end

    def index 
       @favourites = @current_user.favourite_products.order(created_at: :desc)
       p @favourites
    end

end