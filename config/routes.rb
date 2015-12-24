Myapp::Application.routes.draw do

  resources :questions
  devise_for :admin_users, ActiveAdmin::Devise.config
  mount Ckeditor::Engine => '/ckeditor'
  ActiveAdmin.routes(self)
  # You can have the root of your site routed with "root"
  root to: 'landing#manuals'

  scope '', controller: 'landing' do
    get :manuals
  end

  resources :questions, only: [:new, :create]
end
