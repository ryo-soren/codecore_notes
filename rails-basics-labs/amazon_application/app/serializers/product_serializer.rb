class ProductSerializer < ActiveModel::Serializer
  belongs_to :user, key: :seller
  has_many :reviews

  attributes :id, :title, :description, :price, :created_at, :updated_at

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :email, :full_name
  end
  class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :body, :user_id
  end

end

