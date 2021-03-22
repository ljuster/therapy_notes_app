Rails.application.routes.draw do

  root 'homepage#index'
  get '/*path' => 'homepage#index'

  resources :groups
  resources :patients

end
