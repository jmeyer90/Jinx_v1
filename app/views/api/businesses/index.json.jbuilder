json.array! @businesses do |business|
  json.partial! "api/business/business", business: @business 
end