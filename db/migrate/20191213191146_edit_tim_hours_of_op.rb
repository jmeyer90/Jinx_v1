class EditTimHoursOfOp < ActiveRecord::Migration[5.2]
  def change
    remove_column( :hours_of_operation, :time )
  end
end
