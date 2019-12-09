# == Schema Information
#
# Table name: services
#
#  id         :bigint           not null, primary key
#  service    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Service < ApplicationRecord

  validates :service, presence: true

end
