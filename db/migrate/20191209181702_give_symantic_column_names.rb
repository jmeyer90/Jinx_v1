class GiveSymanticColumnNames < ActiveRecord::Migration[5.2]
  def change
    rename_column :neighborhoods, :name, :neighborhood
    rename_column :services, :name, :service
  end
end
