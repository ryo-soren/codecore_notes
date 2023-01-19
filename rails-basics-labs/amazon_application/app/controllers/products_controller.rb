class ProductsController < ApplicationController

    before_action :find_product, only: [:show, :edit, :update, :destroy]
    before_action :authenticate_user!, except: [:index, :show]
    before_action :authorize_user!, only: [:edit, :update, :destroy]

    def new
        @product = Product.new
    end

    def create
        @product = Product.create(product_params)
        @product.user = current_user

        if @product.save
            flash[:success] = "Question successfully created"
            redirect_to @product
        else
            flash[:error] = "Failed to create"
            render 'new'
        end
    end

    def index
        @products = Product.order(created_at: :desc)
    end

    def show
        @reviews = @product.reviews.order(created_at: :desc)
        @review = Review.new
        @favourite = current_user.favourites.find_by_product_id(@product.id)
        p "******"
        p @favourite
        p "******"
    end

    def edit

    end

    def update
        if @product.update(product_params)
            redirect_to @product, alert: "Successfully Updated"
        else
            flash[:error] = "Failed to update"
            render :edit
        end
    end

    def destroy
        # raise
        @product.destroy
        redirect_to products_path
    end

    # to add in favourites controller 
    # def favourite_products 
    #     @favourites = current_user.favourite_products
    # end

    private

    def find_product
        @product = Product.find params[:id]
    end

    def product_params
        params.require(:product).permit(:title, :description)
    end

    def authorize_user!
        redirect_to root_path, alert: "Not Authorized!" unless can?(:modify, @product)
    end
end
