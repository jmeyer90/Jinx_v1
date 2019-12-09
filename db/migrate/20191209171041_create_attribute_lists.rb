class CreateAttributeLists < ActiveRecord::Migration[5.2]
  def change
    create_table :attribute_lists do |t|

      t.timestamps
    end
  end
end
