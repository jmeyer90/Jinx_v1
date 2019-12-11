# == Schema Information
#
# Table name: hours_of_operations
#
#  id         :bigint           not null, primary key
#  day        :string           not null
#  open       :datetime         not null
#  close      :datetime         not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class HoursOfOperation < ApplicationRecord

  has_many :shared_business_hours
  has_many :businesses, through: :shared_business_hours

  validates :day, :time, presence: true
  validates :day, inclusion: 0..6

end
