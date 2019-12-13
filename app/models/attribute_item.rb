# == Schema Information
#
# Table name: attribute_items
#
#  id         :bigint           not null, primary key
#  attr_type  :string           not null
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
    Business Type, 
    Misc Attribute
  )

  validates :attr_type, :name, presence: true, uniqueness: true
  validates :attr_type, inclusion: { in: TYPES, message: "Not a valid attribute type."}

  
end
