class User < ApplicationRecord
    has_secure_password

    has_many :products, dependent: :destroy

    has_many :reviews, dependent: :destroy

    has_many :likes, dependent: :destroy
    has_many :liked_reviews, through: :likes, source: :review

    has_many :favourites, dependent: :destroy
    has_many :favourite_products, through: :favourites, source: :product

    def full_name
        self.first_name + " " + self.last_name
    end

    VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX

end
