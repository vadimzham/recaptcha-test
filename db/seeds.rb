# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
Manual.create!(id: 1, header: "Test header", subheader: "Test subheader", content: "<p>Lorem ipsum dolor sit amet, consectetur adipisc...", link_on_video: "jsYcRSNL8To", created_at: "2015-12-22 11:25:57", updated_at: "2015-12-23 13:02:29")
