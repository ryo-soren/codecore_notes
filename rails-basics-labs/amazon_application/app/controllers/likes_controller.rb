class LikesController < ApplicationController
    before_action :authenticate_user!

    def create
        @review = Review.find params[:review_id]
        @like = Like.new(review: @review, user: current_user)

        if can?(:like, @review)
            if @like.save
                flash.notice = "Liked"
            else
                flash.alert = @like.errors.full_messages.join(", ")
            end
        else
            flash.alert = "You cannot like your own review"
        end
        redirect_to product_path(@review.product_id)
    end

    def destroy
        @like = current_user.likes.find(params[:id])
        if can?(:destroy, @like)
            @like.destroy
            flash.notice = "Question Unliked"
        else
            flash.alert = @like.errors.full_messages.join(", ")
        end
        redirect_to product_path(@like.review.product)
    end
end
