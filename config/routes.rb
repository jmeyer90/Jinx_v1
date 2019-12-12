Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, default: { format: :json } do

    resources :users, only: [ :create, :show ]

    resource :session, only: [ :create, :destroy ]

    resources :businesses, only: [ :index, :show ] do

      resources :reviews, only: [ :index, :show, :create, :update]

    end

    resources :reviews, only: :destroy 
  end

end
