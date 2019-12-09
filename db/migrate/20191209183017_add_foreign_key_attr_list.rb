class AddForeignKeyAttrList < ActiveRecord::Migration[5.2]
  def change
    add_column :attribute_lists, :business_id, :integer, null: false
    add_column :attribute_lists, :price_rating, :integer, null: false
    add_foreign_key :attribute_lists, :businesses
  end
end
