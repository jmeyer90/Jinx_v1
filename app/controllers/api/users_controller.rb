class Api::UsersController < ApplicationController

  def show
    if params.includes?(:businesreviewss_id)
      @user = User.find
    else
      @user = User.find(params[:id])
    end
    render json: @user
  end

  def create
    @user = User.new(user_params)

    if @user.save!
      login!( @user )
      render json: @user
    else 
      render json: @user.errors.fullMessages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :f_name, :l_name, :password, :zip_code)
  end
end
