class ChangeBizTimeIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index(:hours_of_operations, :biz_time)
    add_index(:hours_of_operations, :biz_time)
  end
end
