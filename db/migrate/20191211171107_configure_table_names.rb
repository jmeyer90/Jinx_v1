class ConfigureTableNames < ActiveRecord::Migration[5.2]
  def change
    drop_table :change_attribute_table_names
    rename_table :atrributes, :attribute_items
  end
end
