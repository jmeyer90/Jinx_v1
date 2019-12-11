class CreateNeightborhood < ActiveRecord::Migration[5.2]
  def change
    create_table :neightborhoods do |t|
      t.string :neightborhood, null: false

      t.timestamps
    end

    add_index :neightborhoods, :neightborhood, unique: true
  end
end
