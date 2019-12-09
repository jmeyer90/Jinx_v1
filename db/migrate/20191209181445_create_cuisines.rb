class CreateCuisines < ActiveRecord::Migration[5.2]
  def change
    create_table :cuisines do |t|
      t.string :cuisine, null: false

      t.timestamps
    end

    add_index :cuisines, :cuisine, unique: true
  end
end
