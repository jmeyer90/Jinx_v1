class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.integer :rating, null: false
      t.text :body

      t.timestamps
    end

    add_foreign_key :reviews, :users
    add_foreign_key :reviews, :businesses
  end
end
