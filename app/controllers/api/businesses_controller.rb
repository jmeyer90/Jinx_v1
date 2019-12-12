class Api::BusinessesController < ApplicationController

  
  def index
    @businesses = Business.includes(
      :menu, 
      :reviews,
      :attribute_items,
      :hours_of_operation
    ).all
    debugger

    if @businesses
      debugger
      render json: @businesses
    else
      debugger
      render json: @businesses.errors.full_messages, status: 422
    end
  end

  def show
    @business = Business.includes(
      :menu, 
      :reviews,
      :attribute_items,
      :hours_of_operation
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
