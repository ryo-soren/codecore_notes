class AdminController < ApplicationController
  def panel
    @product_count = Product.all.count
    @review_count = Review.all.count
    @user_count = User.all.count
  end
end
