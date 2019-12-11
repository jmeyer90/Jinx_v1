class CreateAttributeLists < ActiveRecord::Migration[5.2]
  def change
    create_table :attribute_lists do |t|
      t.integer :business_id, null: false
      t.integer :price_rating, null: false

      t.timestamps
    end

    add_index :attribute_lists, :business_id
    add_index :attribute_lists, :price_rating
  end
end
