class CreateManuals < ActiveRecord::Migration
  def change
    create_table :manuals do |t|
      t.string :header
      t.string :subheader
      t.string :content
      t.string :link_on_video
      t.timestamps null: false
    end
  end
end
