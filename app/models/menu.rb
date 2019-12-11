# == Schema Information
#
# Table name: menus
#
#  id          :bigint           not null, primary key
#  business_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Menu < ApplicationRecord

  belongs_to :business
  has_many :menu_items, dependent: :destroy
  
end
