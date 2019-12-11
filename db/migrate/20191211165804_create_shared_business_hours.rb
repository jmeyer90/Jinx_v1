class CreateSharedBusinessHours < ActiveRecord::Migration[5.2]
  def change
    create_table :shared_business_hours do |t|
      t.integer :business_id, null: false
      t.integer :hours_of_operation_id, null: false

      t.timestamps
    end

    add_index :shared_business_hours, :business_id
    add_index :shared_business_hours, :hours_of_operation_id
  end
end
