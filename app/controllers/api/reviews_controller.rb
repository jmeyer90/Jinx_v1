class Api::ReviewsController < ApplicationController

  def index
    debugger
    @reviews = Review.includes(:user).where('reviews.business_id =?', params[:business_id]).references(:reviews)
    debugger
    if @reviews
      render json: @reviews
    else 
      render json: @reviews.errors.full_messages
    end
  end

  def show
    @review = Review.includes(user: :user).find(params[:id])

    if @review
      render json: @review
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def create
    @review = current_user.reviews.new(review_params)

    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = current_user.reviews.find(params[:id])

    if @review.update_attributes(review_params)
      render json: @review
    else
      render json @review.errors.full_messages
    end
  end

  def destroy
    @review = current_user.reviews.find(params[:id])
    @review.destroy!
  end

  private

  def review_params
    debugger
    params.require(:review).permit(:business_id, :rating, :body)
  end

end
