class ChangePriceFromIntToFloat < ActiveRecord::Migration[7.0]
  def up
    change_table :products do |t|
      t.change :price, :float
    end
    #add column command
  end
  
  def down
    change_table :products do |t|
      t.change :price, :integer
    end
  end
  #delete
end
