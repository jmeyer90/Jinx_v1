# == Schema Information
#
# Table name: attribute_lists
#
#  id           :bigint           not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  business_id  :integer          not null
#  price_rating :integer          not null
#

require 'test_helper'

class AttributeListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
