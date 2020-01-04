class AddLikedHeroesToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :liked_heros, :text
  end
end
