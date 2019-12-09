# == Schema Information
#
# Table name: neighborhoods
#
#  id           :bigint           not null, primary key
#  neighborhood :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Neighborhood < ApplicationRecord

  validates :neighborhood, presence: true

end
