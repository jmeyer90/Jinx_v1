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

  # has_many :reviews

  validates :name, :address, presence: true
  
end
