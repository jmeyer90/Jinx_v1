class CreateServices < ActiveRecord::Migration[5.2]
  def change
    create_table :services do |t|
      t.string :service, null: false

      t.timestamps
    end

    add_index :services, :service, unique: true
  end
end
