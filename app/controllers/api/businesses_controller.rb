class Api::BusinessesController < ApplicationController

  
  def index
    @businesses = Business.includes(
      menu: :menu, 
      reviews: :reviews,
      attribute_items: :attribute_items,
      hours_of_operation: :hours_of_operation
    ).all

    if @businesses
      render json: @businesses
    else
      render json: @businesses.errors.full_messages, status: 422
    end
  end

  def show
    @business = Business.includes(
      menu: :menu, 
      reviews: :reviews,
      attribute_items: :attribute_items,
      hours_of_operation: :hours_of_operation
    ).find( params[id] )
    debugger
    if @business
      debugger
      render json: @business
    else
      debugger
      render json: @business.errors.full_messages, status: 422
    end
  end

  private

  def business_params
    params.require(:business).permit( :menu, :reviews, :attribute_items, :hours_of_operation )
  end

end
