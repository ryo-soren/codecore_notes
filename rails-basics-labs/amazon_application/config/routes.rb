Rails.application.routes.draw do
  get 'admin/panel'
  # get 'sessions/new'
  # get 'users/new'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resource :session, only:[:new, :create, :destroy]

  resources :users, only: [:new, :create]

  resources :news_articles, only: [:new, :create, :show, :index]
  
  root 'amazon#index' 

  resources :products do
    resource :favourites, shallow: true, only: [:create, :destroy]
    resources :reviews, only: [:create, :destroy] do
      resources :likes, shallow: true, only: [:create, :destroy]
    end
    post '/reviews/:id', to: 'reviews#unhide', as: :review_unhide
  end
  resources :favourites, only: [:index]
  get '/home', to: 'amazon#home'
  get '/about_us', to: 'amazon#about_us', as: "about"
  get '/contact_us', to: 'amazon#contact_us', as: "contact"

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :products, only: [:index, :show]
    end
  end

end