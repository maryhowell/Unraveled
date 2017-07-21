class CreatePatters < ActiveRecord::Migration[5.0]
  def change
    create_table :patterns do |t|
      t.integer :seller_id
      t.string :name, null: false
      t.string :image_url, null: false, array: true
      t.string :short_description, null: false
      t.integer :price, null: false
      t.timestamps
    end
  end
end
