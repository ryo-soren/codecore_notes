class NewsArticle < ApplicationRecord
    before_save :capitalize_title
    after_initialize :publish
    
    validates :title, presence: true, uniqueness: true
    validates :description, presence: true
    validate :published_at_after_created_at

    def published_at_after_created_at
        if self.published_at && self.created_at && (self.published_at < self.created_at)
            errors.add(:published_at, "must be after created_at")
        end
    end

    def capitalize_title
        self.title.capitalize!
    end

    def publish
        self.published_at = Time.now
    end
end
