json.businesses do

  json.array! @businesses do |business|

    json.set! business.id do

    json.partial! "api/businesses/business", business: business
    
    end
    
  end

end

json.reviews do

  json.array! @reviews do |review|

    json.set! review.id do

      json.extract! review, :id, :body, :rating, :business_id

      json.user_id review.user.id

    end

  end

end

json.users do

  json.array! @reviews do |review|

    json.set! review.user.id do
      json.f_name review.user.f_name
      json.l_name review.user.l_name
    end

  end

end