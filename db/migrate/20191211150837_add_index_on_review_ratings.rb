class AddIndexOnReviewRatings < ActiveRecord::Migration[5.2]
  def change
    add_index :reviews, :rating
  end
end
