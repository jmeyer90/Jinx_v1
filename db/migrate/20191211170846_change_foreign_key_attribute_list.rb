class ChangeForeignKeyAttributeList < ActiveRecord::Migration[5.2]
  def change
    rename_column :attribute_lists, :attribute_id, :attribute_list_id
  end
end
