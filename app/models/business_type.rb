# == Schema Information
#
# Table name: business_types
#
#  id         :bigint           not null, primary key
#  type       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BusinessType < ApplicationRecord

  validates :type, presence: true
  
end
