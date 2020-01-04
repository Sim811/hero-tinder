class Api::HerosController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.random_hero(current_user.liked_heros)
  end

  def update
    current_user.liked_heros << params[:id].to_i
    current_user.save
  end

  def my_heros
    render json: User.liked(current_user.liked_heros)
  end
  
end
