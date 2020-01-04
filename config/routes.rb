Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :heros, only: [:index, :show, :update]
    get 'my_heros', to: 'heros#my_heros'
  end
  
end
