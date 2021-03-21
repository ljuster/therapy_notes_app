class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.integer :location_id
      t.string :name
      t.datetime :starts_at
      t.datetime :ends_at
      t.timestamps

      t.string :type
    end
  end
end
