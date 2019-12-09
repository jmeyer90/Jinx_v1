# == Schema Information
#
# Table name: businesses
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  address    :string           not null
#  longitude  :float            not null
#  latitude   :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Business < ApplicationRecord

  has_many :reviews

  validates :name, :address, :longitude, :latitude, presence: true
  
end
