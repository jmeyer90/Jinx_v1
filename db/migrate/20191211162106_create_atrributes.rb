class CreateAtrributes < ActiveRecord::Migration[5.2]
  def change
    create_table :atrributes do |t|
      t.string :type, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :atrributes, :type, unique: true
    add_index :atrributes, :name, unique: true
  end
end
