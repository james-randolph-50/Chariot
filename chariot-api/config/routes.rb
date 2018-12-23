Rails.application.routes.draw do
    namespace :api do
      resource :cars, except: [:new, :edit]
    end
end
