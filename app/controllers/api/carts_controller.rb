class Api::CartController < ApplicationController
  def index
    if current_user
      @prev_carts = current_user.carts.where("active = false")
    else
      render json: ['not signed in'], status: 422
    end
  end

  def show
    @cart = Cart.includes(:cart_items).find(params[:id])

    if @cart
      render :show
    else
      render json: ['cart does not exist'], status: 422
    end
  end

  def update
    @old_cart = Cart.find(params[:id])

    if @old_cart && @old_cart.user_id == current_user.id
      @old_cart.active = false
      @old_cart.save
      @cart = Cart.create(user_id: current_user.id)
      render :show
    else
      render json: ['cart does not exist'], status: 422
    end
  end
end
