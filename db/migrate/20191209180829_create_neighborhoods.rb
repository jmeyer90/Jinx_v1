class CreateNeighborhoods < ActiveRecord::Migration[5.2]
  def change
    create_table :neighborhoods do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :neighborhoods, :name, unique: true
  end
end
