# == Schema Information
#
# Table name: attribute_items
#
#  id         :bigint           not null, primary key
#  type       :string           not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class AttributeItem < ApplicationRecord

  has_many :attribute_lists, dependent: :destroy
  has_many :businesses, through: :attribute_lists

  TYPES = %w(
    Cuisine, 
    Neighborhood, 
    Service, 
    Business Type, 
    Misc Attribute
  )

  validates :type, :name, presence: true, uniqueness: true
  validates :type, inclusion: { in: TYPES, message: "%{type} is not a valid attribute type."}

  
end
