class Product < ApplicationRecord
    belongs_to :user
    after_initialize :set_defaults
    before_save :capitalize_title

    has_many :reviews, dependent: :destroy

    has_many :favourites, dependent: :destroy
    has_many :favourite_users, through: :favourites, source: :user

    validates(
        :title,
        presence: true, 
        uniqueness: {
            scope: :title
        }
    )

    validates(
        :price, 
        numericality: {
            greater_or_equal_to: 0 
        }
    )

    validates(
        :description, 
        presence: true,
        length: {
            minimum: 2
        }
    )

    def self.search(str)
        
    end

    private

    def set_defaults
        self.price = 0 if self.price.nil?
    end

    def capitalize_title
        self.title.capitalize!
    end

end
