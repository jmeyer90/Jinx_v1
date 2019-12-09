class CreateMenuItems < ActiveRecord::Migration[5.2]
  def change
    create_table :menu_items do |t|
      t.integer :menu_id, null: false
      t.string :title, null: false
      t.float :price, null: false
      t.text :description

      t.timestamps
    end

    add_index :menu_items, :title
    add_foreign_key :menu_items, :menus
  end
end
