class CreateChangeAttributeTableNames < ActiveRecord::Migration[5.2]
  def change
    create_table :change_attribute_table_names do |t|

      t.timestamps
    end
  end
end
