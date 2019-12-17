# == Schema Information
#
# Table name: hours_of_operations
#
#  id         :bigint           not null, primary key
#  day        :string           not null
#  time       :datetime         not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class HoursOfOperation < ApplicationRecord

  has_many :shared_business_hours, dependent: :destroy
  has_many :businesses, through: :shared_business_hours

  validates :day, :biz_time, presence: true
  validates :day, inclusion: 0..6
  validates :biz_time, inclusion: 0...24

end
