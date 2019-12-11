# == Schema Information
#
# Table name: menu_items
#
#  id          :bigint           not null, primary key
#  menu_id     :integer          not null
#  title       :string           not null
#  price       :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class MenuItem < ApplicationRecord

  belongs_to :menu

  validates :title, :price, presence: true
  
end
