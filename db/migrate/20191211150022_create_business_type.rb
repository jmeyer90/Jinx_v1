class CreateBusinessType < ActiveRecord::Migration[5.2]
  def change
    create_table :business_types do |t|
      t.string :type, null: false

      t.timestamps
    end

    add_index :business_types, :type, unique: true
  end
end
