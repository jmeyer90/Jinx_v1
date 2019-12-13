class Api::BusinessesController < ApplicationController

  
  def index
    @businesses = Business.all.includes(
      :menu, 
      :reviews,
      :attribute_items,
      :hours_of_operation
    )
    

    if @businesses
      
      render json: @businesses
    else
      
      render json: @businesses.errors.full_messages, status: 422
    end
  end

  def show
    @business = Business.find( params[:id] )
    # @menu = @business.menu.includes(:menu_items)
    @reviews = @business.reviews.includes(:user)
    
    if @business
      render :show
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  private

  def business_params
    params.require(:business).permit( :name, :address, :latitude, :longitude, :menu, :reviews, :attribute_items, :hours_of_operation )
  end

end
