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
end
