# == Schema Information
#
# Table name: shared_business_hours
#
#  id                    :bigint           not null, primary key
#  business_id           :integer          not null
#  hours_of_operation_id :integer          not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

require 'test_helper'

class SharedBusinessHourTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
