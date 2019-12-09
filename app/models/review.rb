# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  business_id :integer          not null
#  rating      :integer          not null
#  body        :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord

  has_many :comments

  belongs_to :user
  belongs_to :business

  validates :rating, presence: true
end
