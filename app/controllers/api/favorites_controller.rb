class FavoritesController < ApplicationController

  def index
    @favorites = Favorite.all
    render :index
  end

  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.user_id = current_user.id

    if @favorite.save
      render :show
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
    render :show
  end

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :pattern_id)
  end

end
