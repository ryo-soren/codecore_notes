class ProductCollectionSerializer < ActiveModel::Serializer
  # Created with:
  # $ rails g serializer product_collection 

  attributes :id, :title, :description, :price, :created_at, :updated_at, :seller

  def seller
    object.user&.full_name
  end

end
