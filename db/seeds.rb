# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Seed AttributeItems
AttributeItem.destroy_all
attr1 = AttributeItem.create(attr_type: "Cuisinse", name: "Italian")
attr1 = AttributeItem.create(attr_type: "Cuisinse", name: "Lebanse")
attr1 = AttributeItem.create(attr_type: "Cuisinse", name: "Brunch")
attr1 = AttributeItem.create(attr_type: "Cuisinse", name: "Ramen")
attr1 = AttributeItem.create(attr_type: "Cuisinse", name: "Sushi")
attr1 = AttributeItem.create(attr_type: "Cuisinse", name: "Pizza")
attr1 = AttributeItem.create(attr_type: "Cuisinse", name: "French")
attr1 = AttributeItem.create(attr_type: "Cuisinse", name: "American")
attr1 = AttributeItem.create(attr_type: "Cuisinse", name: "Chinese")
attr1 = AttributeItem.create(attr_type: "Cuisinse", name: "Burgers")
attr1 = AttributeItem.create(attr_type: "Cuisinse", name: "Atlantian")
attr1 = AttributeItem.create(attr_type: "Cuisinse", name: "Indian")
attr1 = AttributeItem.create(attr_type: "Neighborhood", name: "The Shire")
attr1 = AttributeItem.create(attr_type: "Neighborhood", name: "Hogsmeade")
attr1 = AttributeItem.create(attr_type: "Neighborhood", name: "Diagon Alley")
attr1 = AttributeItem.create(attr_type: "Neighborhood", name: "Helm's Deep")
attr1 = AttributeItem.create(attr_type: "Neighborhood", name: "Atlantis")
attr1 = AttributeItem.create(attr_type: "Business Type", name: "Wand Repair")
attr1 = AttributeItem.create(attr_type: "Business Type", name: "Potion Supplies")
attr1 = AttributeItem.create(attr_type: "Business Type", name: "Curse Removal")
attr1 = AttributeItem.create(attr_type: "Misc Attribute", name: "Takeout")
attr1 = AttributeItem.create(attr_type: "Misc Attribute", name: "Reservations")
attr1 = AttributeItem.create(attr_type: "Misc Attribute", name: "Waiter Service")
attr1 = AttributeItem.create(attr_type: "Misc Attribute", name: "Outdoor Seating")
attr1 = AttributeItem.create(attr_type: "Misc Attribute", name: "Good for Groups")
attr1 = AttributeItem.create(attr_type: "Misc Attribute", name: "Happy Hour")
attr1 = AttributeItem.create(attr_type: "Misc Attribute", name: "Delivery")
attr1 = AttributeItem.create(attr_type: "Misc Attribute", name: "Full Bar")
attr1 = AttributeItem.create(attr_type: "Misc Attribute", name: "Wi-Fi")
attr1 = AttributeItem.create(attr_type: "Misc Attribute", name: "Good for Kids")
attr1 = AttributeItem.create(attr_type: "Misc Attribute", name: "Pets Allowed")
attr1 = AttributeItem.create(attr_type: "Misc Attribute", name: "Wheelchair Accessible")


# Seed Business
Business.destroy_all
business1 = Business.create(name: "business1", address:"address1")
business2 = Business.create(name: "business2", address:"address2")
business3 = Business.create(name: "business3", address:"address3")

# Seed HoursOfOperation

# Seed Menu
menu1 = Menu.create(business_id: business1)
menu2 = Menu.create(business_id: business2)
menu3= Menu.create(business_id: business3)

# Seed MenuItem
menuItem1 = MenuItem.create(menu_id: 1, title: "Boiled Newt", price: 1.5)
menuItem1 = MenuItem.create(menu_id: 1, title: "Rabbit Feet", price: 2.5)
menuItem1 = MenuItem.create(menu_id: 2, title: "Butterbeer", price: 5)
menuItem1 = MenuItem.create(menu_id: 2, title: "Floating Chocolate Pie", price: 10.5)
menuItem1 = MenuItem.create(menu_id: 3, title: "Mutton", price: 12)
menuItem1 = MenuItem.create(menu_id: 3, title: "Frog Leg Tacos", price: 7)

# Seed User
User.destroy_all
demoUser =  User.create(email: "demo@mail.com", f_name: "demo", l_name: "demo", password: "password", zip_code:11111)
user1 = User.create(email: "user1@mail.com", f_name: "user1", l_name: "user1", password: "password", zip_code:11111)
user2 = User.create(email: "user2@mail.com", f_name: "user2", l_name: "user2", password: "password", zip_code:11111)
user3 = User.create(email: "user3@mail.com", f_name: "user3", l_name: "user3", password: "password", zip_code:11111)

# Seed Review
Review.destroy_all
review1 = Review.create(user_id: user1.id, business_id: business1.id, rating: 5, body: "Review One: Testing Reviews")
review2 = Review.create(user_id: user2.id, business_id: business2.id, rating: 4, body: "Review Two: Testing Reviews")
review3 = Review.create(user_id: user3.id, business_id: business3.id, rating: 3, body: "Review Three: Testing Reviews")
review4 = Review.create(user_id: user1.id, business_id: business2.id, rating: 3, body: "Review Four: Testing Reviews")



