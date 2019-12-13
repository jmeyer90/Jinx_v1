class EditTimHoursOfOp < ActiveRecord::Migration[5.2]
  def change
    change_column( :hours_of_operation, :time, :float, null: false)
  end
end
