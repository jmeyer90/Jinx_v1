# == Schema Information
#
# Table name: businesses
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  address    :string           not null
#  longitude  :float
#  latitude   :float
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Business < ApplicationRecord

  has_one :menu
  has_many :reviews
  has_many :hours_of_operation

  has_many :attribute_lists
  has_many :attribute_items, through: :attribute_lists, source: :attribute_item

  has_many :shared_business_hours
  has_many :hours_of_operation, through: :shared_business_hours

  validates :name, :address, presence: true, uniqueness: true
  
end
