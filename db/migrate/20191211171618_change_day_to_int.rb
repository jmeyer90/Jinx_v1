class ChangeDayToInt < ActiveRecord::Migration[5.2]
  def change
    create_table :hours_of_operation do |t|
      t.integer :day, null: false
      t.datetime :open, null: false
      t.datetime :close, null: false

      t.timestamps
    end

    add_index :hours_of_operation, :day
    add_index :hours_of_operation, :open
    add_index :hours_of_operation, :close
  end
end
