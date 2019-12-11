class ChangeAttributeLists < ActiveRecord::Migration[5.2]
  def change
    remove_column(:attribute_lists, :price_rating)
    add_column(:attribute_lists, :attribute_id, :integer, null: false)
    add_index :attribute_lists, :attribute_id
  end
end
