require 'rails_helper'

RSpec.describe NewsArticlesController, type: :controller do

    describe "#new" do
        it "requires a render of a new template" do
            get(:new)
            expect(response).to(render_template(:new))
        end

        it "requires a new instance of a news article" do
            get(:new)
            expect(assigns(:news_article)).to(be_a_new(NewsArticle))
        end
    end

    describe "#create" do

        context "with valid parameters" do
            it "requires a new database entry" do
                count_before = NewsArticle.count
                valid_article = FactoryBot.create(:news_article)
                count_after = NewsArticle.count
                expect(count_after).to eq(count_before+1)
            end

            it "requires a redirect to the show page" do
                valid_article = post(:create, params: {
                    news_article: FactoryBot.attributes_for(:news_article)
                })
                # valid_article = FactoryBot.create(:news_article)
                news_article = NewsArticle.last
                expect(response).to(redirect_to(news_article))
            end
        end

        context "with invalid parameters" do

            it "required to prevent new database entry" do
                count_before = NewsArticle.count
                invalid_request = post(:create, params:{
                    news_article: FactoryBot.attributes_for(:news_article, title: nil)
                })
                count_after = NewsArticle.count
                expect(count_after).to eq(count_before)
            end

            it "requires a render of the new page" do 
                invalid_article = post(:create, params:{
                    news_article: FactoryBot.attributes_for(:news_article, title: nil)
                })
                expect(response).to(render_template(:new))
            end
        end
    end

    describe "#show" do
        it "requires a render of the show template" do
            @news_article = FactoryBot.create(:news_article)
            get(:show, params: {id: @news_article.id})
            expect(response).to(render_template(:show))
        end

        it "requires setting an instance variable for the shown object" do
            @news_article = FactoryBot.create(:news_article)
            get(:show, params: {id: @news_article.id})
            expect(assigns(:news_article)).to eq(@news_article)  
        end
    end

    describe "#index" do
        it "requires a render of the index template" do
            get(:index)
            expect(response).to(render_template(:index))
        end

        it "requires setting an instance variable of all articles in the db" do
            news_article1 = FactoryBot.create(:news_article)
            news_article2 = FactoryBot.create(:news_article)
            news_article3 = FactoryBot.create(:news_article)
            get(:index)
            expect(assigns(:news_articles)).to(eq([news_article3, news_article2, news_article1]))
        end
    end

    describe "#destroy" do
        
    end
    

end
