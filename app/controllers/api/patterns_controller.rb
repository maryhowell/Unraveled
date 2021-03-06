class Api::PatternsController < ApplicationController

  def index
    @patterns = Pattern.all
    render :index
  end

  def show
    @pattern = Pattern.find(params[:id])
  end

  def create
    @pattern = current_user.patterns.new(pattern_params)
    if @pattern.save
      render json: @pattern
    else
      render json: @pattern.errors.full_messages
    end
  end

  def destroy
    @pattern = current_user.patterns.find(params[:id])
    @pattern.destroy
    render json: @pattern
  end

  def update
    @pattern = Pattern.find(params[:id])
    if @pattern.update(pattern_params)
      render json: @pattern
    else
      render json: @pattern.errors.full_messages, status: 422
    end
  end



  private

  def pattern_params
    params.require(:pattern).permit(:name, :short_description, :price, image_url:[])
  end
end
