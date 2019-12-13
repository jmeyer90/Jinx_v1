class RenameColumnType < ActiveRecord::Migration[5.2]
  def change
    rename_column( :attribute_items, :type, :attr_type )
  end
end
