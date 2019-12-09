class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :review_id, null: false
      t.integer :parent_id
      t.text :body, null: false

      t.timestamps
    end

    add_foreign_key :comments, :users
    add_foreign_key :comments, :reviews
  end
end
