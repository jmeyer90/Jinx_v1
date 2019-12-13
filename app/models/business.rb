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

  has_one :menu, dependent: :destroy
  has_many :reviews, foreign_key: :business_id, dependent: :destroy

  has_many :attribute_lists, dependent: :destroy
  has_many :attribute_items, through: :attribute_lists, source: :attribute_item

  has_many :shared_business_hours, dependent: :destroy
  has_many :hours_of_operation, through: :shared_business_hours

  validates :name, :address, presence: true, uniqueness: true

  def mainReview
    review = reviews[0]
    review
  end
  
end
