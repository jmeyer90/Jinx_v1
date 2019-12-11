class DropTablesTwo < ActiveRecord::Migration[5.2]
  def change
    drop_table(:cuisines)
    drop_table(:misc_attributes)
    drop_table(:neightborhoods)
    drop_table(:services)
    drop_table(:business_types)
  end
end
