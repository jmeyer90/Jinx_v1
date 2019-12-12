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
    ).find( params[:id] )
    if @business
      render json: @business
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  private

  def business_params
    params.require(:business).permit( :name, :address, :latitude, :longitude, :menu, :reviews, :attribute_items, :hours_of_operation )
  end

end
