# == Schema Information
#
# Table name: misc_attributes
#
#  id         :bigint           not null, primary key
#  attribute  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class MiscAttribute < ApplicationRecord

  validates :attribute, presence: true
  
end
