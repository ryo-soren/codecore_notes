class ProductSerializer < ActiveModel::Serializer
  # created with:
  # $ rails g serializer product 

  attributes :id, :title, :description, :price, :created_at, :updated_at, :seller_full_name
  
  belongs_to :user, key: :seller

  def seller_full_name
    object.user&.full_name
  end

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :email, :full_name
  end

  has_many :reviews

  class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :body, :rating, :reviewer_full_name
    belongs_to :user, key: :reviewer
    
    def reviewer_full_name
      object.user&.full_name
    end
  
  end
end
