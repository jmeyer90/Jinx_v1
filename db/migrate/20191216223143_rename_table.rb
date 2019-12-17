class RenameTable < ActiveRecord::Migration[5.2]
  def change
    rename_table(:hours_of_operation, :hours_of_operations)
  end
end
