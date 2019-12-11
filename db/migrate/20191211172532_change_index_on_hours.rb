class ChangeIndexOnHours < ActiveRecord::Migration[5.2]
  def change
    remove_column :hours_of_operation, :close
    rename_column :hours_of_operation, :open, :time
  end
end
