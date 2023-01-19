class Api::V1::ProductsController < Api::ApplicationController
    def index
        products = Product.order(created_at: :desc)
        render(json: products)
    end

    def show 
        product = Product.find(params[:id])
        render(json: product)
    end
end
