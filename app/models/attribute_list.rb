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

class AttributeList < ApplicationRecord

  belongs_to :business
  belongs_to :attribute_item

end
