class ChangeForeignKeyAttributeList2 < ActiveRecord::Migration[5.2]
  def change
    rename_column :attribute_lists, :attribute_list_id, :attribute_item_id
  end
end
