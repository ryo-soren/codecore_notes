require 'rails_helper'

RSpec.describe NewsArticle, type: :model do
  describe "validates" do
    describe "title" do
      it "requires title to be present" do
        # GIVEN
        news_article = FactoryBot.build(:news_article, title: nil)

        # WHEN
        news_article.valid?

        # THEN
        expect(news_article.errors.messages).to(have_key(:title))
      end

      it "requires title to be unique" do
        # GIVEN 
        news_article1 = FactoryBot.create(:news_article)
        news_article2 = FactoryBot.build(:news_article, title: news_article1.title)

        # WHEN
        news_article2.valid?

        # THEN
        expect(news_article2.errors.messages).to(have_key(:title))
      end
    end

    describe "description" do
      it "requires description to be present" do
        # GIVEN
        news_article = FactoryBot.build(:news_article, description: nil)

        # WHEN
        news_article.valid?

        # THEN
        expect(news_article.errors.messages).to(have_key(:description))
      end
    end
  end

  describe "validate" do
    describe "published_at_after_created_at" do
      it "requires published at to be later than created at" do
        # GIVEN
        news_article = FactoryBot.build(:news_article, created_at: Time.now, published_at: Time.now - 100)

        # WHEN
        news_article.valid?

        # THEN
        expect(news_article.errors.messages).to(have_key(:published_at)) 
      end
    end

    describe "capitalize_title" do
      it "requires the title to capitalized" do
        news_article = FactoryBot.create(:news_article, title: "a unique title")
        expect(news_article.title).to(eq "A unique title")
      end
    end
  end
end
