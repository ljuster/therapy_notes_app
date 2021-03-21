class CreatePatientsGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :patients_groups, id: false do |t|
        t.references :patient
        t.references :group
    end
  end
end
