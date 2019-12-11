# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Seed User
User.destroy_all
demoUser =  User.create(email: "demo@mail.com", f_name: "demo", l_name: "demo", password: "password", zip_code:11111)
user1 = User.create(email: "user1@mail.com", f_name: "user1", l_name: "user1", password: "password", zip_code:11111)
user2 = User.create(email: "user2@mail.com", f_name: "user2", l_name: "user2", password: "password", zip_code:11111)
user3 = User.create(email: "user3@mail.com", f_name: "user3", l_name: "user3", password: "password", zip_code:11111)

# Seed Business
Business.destroy_all
business1 = Business.create(name: "business1", address:"address1")
business2 = Business.create(name: "business2", address:"address2")
business3 = Business.create(name: "business3", address:"address3")
