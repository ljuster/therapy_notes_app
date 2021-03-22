class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :slug
      # 0 => "active"
      t.integer :state, default: 0

      # sti column for User: Patient, Therapist
      t.string :type

      t.string :first_name
      t.string :last_name
      t.string :mobile_phone_number, unique: true

      t.string :gender

      t.string :email
      t.string :encrypted_password, null: false, default: ""

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.string   :current_sign_in_ip
      t.string   :last_sign_in_ip

      t.datetime :deleted_at
      t.timestamps
    end

    add_index :users, :slug,                 unique: true
    add_index :users, :email,                unique: true
    add_index :users, :reset_password_token, unique: true
    add_index :users, :mobile_phone_number,  unique: true
    add_index :users, :deleted_at

  end
end
