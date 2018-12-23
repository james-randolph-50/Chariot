class CreateCars < ActiveRecord::Migration[5.1]
  def change
    create_table :cars do |t|
      t.string :name
      t.integer :price
      t.string :img_url
      t.integer :year

      t.timestamps
    end
  end
end
