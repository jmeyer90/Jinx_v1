json.review do

  json.partial! "api/reviews/review", review: @review

end

json.user do 

  json.set! @user.id do

    json.partial! "api/users/user", user: @user

  end
  
end