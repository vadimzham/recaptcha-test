class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :subject, required: true
      t.string :name, required: true
      t.string :email, required: true
      t.string :message, required: true
      t.timestamps null: false
    end
  end
end
