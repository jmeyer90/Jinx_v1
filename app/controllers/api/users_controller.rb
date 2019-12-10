class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.new(user_params)

    debugger
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
