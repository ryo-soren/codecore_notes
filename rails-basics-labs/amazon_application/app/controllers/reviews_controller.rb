class ReviewsController < ApplicationController

    before_action :find_product
    before_action :authenticate_user!
    before_action :authorize_user!, only: [:edit, :update, :destroy]


    def create 
        @review = Review.new(review_params)
        @review.product = @product
        @review.user = current_user
        if @review.save
            flash[:success] = "Review successfully submitted"
            redirect_to @product
        else
            flash[:error] = "Something went wrong"
            @reviews = @product.reviews.order(created_at: :desc)
            render 'products/show', status: 303
        end
    end

    def destroy
        @review = Review.find params[:id]
        if @review.destroy
            flash[:success] = "Deleted"
            redirect_to product_path(@product)
        else
            redirect_to root_path
        end
    end

    private

    def find_product
        @product = Product.find params[:product_id]
    end

    def review_params
        params.require(:review).permit(:body)
    end

    def authorize_user!
        redirect_to root_path, alert: "Not Authorized!" unless can?(:modify, @review)
    end
end
