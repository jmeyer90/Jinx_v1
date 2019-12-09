class CreateMenus < ActiveRecord::Migration[5.2]
  def change
    create_table :menus do |t|
      t.integer :business_id

      t.timestamps
    end

    add_foreign_key :menus, :businesses
  end
end
