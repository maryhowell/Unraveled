class Api::CartItemsController < ApplicationController

  def index
    @cart_items = CartItem.all
  end

  def create
    @cart_item = CartItem.new(cart_item_params)
    item = Item.find(cart_item_params[:item_id])

    if @cart_item.save
      render :show
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def update
    @cart_item = CartItem.find(params[:id])

    if @cart_item.update(cart_item_params)
      render :show
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def show
    @cart_item = CartItem.find(params[:id])

    if @cart_item
      render :show
    else
      render json: errors, status: 404
    end
  end

  def destroy
    cart_item = CartItem.find(params[:id])
    if cart_item.destroy!
      render json: {}
    else
      render json: errors, status: 422
    end
  end

  private

  def cart_item_params
    params.require(:cart_item).permit(:cart_id, :item_id, :quantity)
  end
end
