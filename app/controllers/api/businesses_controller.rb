class Api::BusinessesController < ApplicationController

  def index
    @businesses = Businesses.all
    redner json: @businesses
  end

  def show
    @business = Businesses.find(params[id])
  end

  def create

  end

  private

  def business_params
    params.require(:business).permit(:name, :address)
  end

end