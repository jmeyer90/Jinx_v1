class RemoveTable < ActiveRecord::Migration[5.2]
  def change
    drop_table(:time_column_in_hrs_of_ops)
  end
end
