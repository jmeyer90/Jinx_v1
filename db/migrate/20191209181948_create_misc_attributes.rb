class CreateMiscAttributes < ActiveRecord::Migration[5.2]
  def change
    create_table :misc_attributes do |t|
      t.string :attribute, null: false

      t.timestamps
    end

    add_index :misc_attributes, :attribute, unique: true
  end
end
