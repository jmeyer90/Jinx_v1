class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials( params[:user][:email], params[:user][:password])

    if @user
      login!( @user )
      render json: @user
    else 
      render json: ["Wrong email, password combo"], status: 422
    end
  end

  def destroy
    logout!
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end
