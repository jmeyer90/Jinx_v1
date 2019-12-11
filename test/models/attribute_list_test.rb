# == Schema Information
#
# Table name: attribute_lists
#
#  id                :bigint           not null, primary key
#  business_id       :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  attribute_item_id :integer          not null
#

require 'test_helper'

class AttributeListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
