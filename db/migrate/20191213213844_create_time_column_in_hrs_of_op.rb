class CreateTimeColumnInHrsOfOp < ActiveRecord::Migration[5.2]
  def change
    create_table :time_column_in_hrs_of_ops do |t|
      add_column( :hours_of_operation, :biz_time, :float, null: false)
    end

    add_index :hours_of_operation, :biz_time, unique: true
  end
end
