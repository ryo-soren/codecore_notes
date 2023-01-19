Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root "bill_splitter#index"

  get "/bill_splitter", to: "bill_splitter#bill_splitter"
  
end
