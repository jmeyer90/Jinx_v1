class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index(:attribute_items, :attr_type)
    add_index(:attribute_items, :attr_type)
  end
end
