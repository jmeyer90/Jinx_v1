class CreateAttributeLists < ActiveRecord::Migration[5.2]
  def change
    create_table :attribute_lists do |t|
      t.integer :business_id, null: false
      t.float :price_rating, null: false

      t.timestamps
    end

    add_foreign_key :attribute_lists, :businesses
  end
end
