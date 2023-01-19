class NewsArticlesController < ApplicationController
    def new
        @news_article = NewsArticle.new
    end

    def create
        @news_article = NewsArticle.new params.require(:news_article)
        .permit(
            :title,
            :description
        )

        if @news_article.save
            redirect_to @news_article
        else
            render :new
        end
    end

    def show
        @news_article = NewsArticle.find params[:id]
    end

    def index
        @news_articles = NewsArticle.all.order(created_at: :desc)
    end

    private

    # def article_params
    #     params.require(:news_article).permit(:title, :description)
    # end
end
