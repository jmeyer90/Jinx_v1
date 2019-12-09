class CreateHoursOfOperations < ActiveRecord::Migration[5.2]
  def change
    create_table :hours_of_operations do |t|
      t.string :day, null: false
      t.datetime :open, null: false
      t.datetime :close, null: false

      t.timestamps
    end

    add_index :hours_of_operations, :day, unique: true
    add_index :hours_of_operations, :open
    add_index :hours_of_operations, :close
  end
end
