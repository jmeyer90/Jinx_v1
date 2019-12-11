class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.includes(
      menu: :menu, 
      reviews: :reviews,
      attribute_items: :attribute_items,
      hours_of_operations: :hours_of_operations
    ).all
    if @businesses
      render json: @businesses
    else
      render json: @businesses.errors.fullMessages, status: 422
    end
  end

  def show
    @business = Business.includes(
      menu: :menu, 
      reviews: :reviews,
      attribute_items: :attribute_items,
      hours_of_operations: :hours_of_operations
    ).find( params[id] )
    if @business
      render json: @business
    else
      render json: @business.errors.fullMessages, status: 422
    end
  end

end
