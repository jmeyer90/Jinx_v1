json.reviews do

  json.array! @reviews do |review|

    json.partial! "api/reviews/review", review: review

  end

end

json.users do 

  json.array! @reviews do |review|

    json.set! review.user_id do

      json.partial! "api/users/user", user: review.user

    end

  end

end