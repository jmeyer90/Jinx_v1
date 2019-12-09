# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  review_id  :integer          not null
#  parent_id  :integer
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord

  belongs_to :user
  belongs_to :review
  
  belongs_to :parent,
    foreign_key: :parent_id,
    class_name: :Comment

  validates :body, presence: true
end
