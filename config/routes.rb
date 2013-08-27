Journal::Application.routes.draw do
  resources :posts
  root :to => "posts#general"
end
