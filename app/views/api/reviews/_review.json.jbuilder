json.review do
  json.set! review.id do
    json.extract! review, :id, :user_id, :business_id, :rating, :body
  end
end

json.user do
  json.set! user.id do
    json.extract! user, :id, :f_name, :l_name
  end
end