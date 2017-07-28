class Api::FavoritesController < ApplicationController

  def index
    if params[:pattern_id]
      @favorites = current_user.favorites.where(pattern_id: params[:pattern_id])
      if @favorites
        render :index
      else
        render json: {}
      end
    else
      @favorites = current_user.favorites
      render :index
    end
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

  def show
    @favorite = Favorite.find(params[:id])
  end

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :pattern_id)
  end

end
