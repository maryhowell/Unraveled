Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :patterns, only: [:create, :index, :show] do
      resources :reviews, only: [:index]
    end
    resources :carts, only: [:create, :index, :update]
    resources :cart_items, only: [:index, :create, :update, :destroy]
    resources :reviews, only: [:show, :create, :update, :destroy]

  end

   root "static_pages#root"
end
