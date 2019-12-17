# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

AttributeList.destroy_all
AttributeItem.destroy_all
Review.destroy_all
User.destroy_all
MenuItem.destroy_all
Menu.destroy_all
SharedBusinessHour.destroy_all
HoursOfOperation.destroy_all
Business.destroy_all

# Seed AttributeItems
attr1 = AttributeItem.create(attr_type: "Cuisinse", name: "Italian")
attr2 = AttributeItem.create(attr_type: "Cuisinse", name: "Lebanse")
attr3 = AttributeItem.create(attr_type: "Cuisinse", name: "Brunch")
attr4 = AttributeItem.create(attr_type: "Cuisinse", name: "Ramen")
attr5 = AttributeItem.create(attr_type: "Cuisinse", name: "Sushi")
attr6 = AttributeItem.create(attr_type: "Cuisinse", name: "Pizza")
attr7 = AttributeItem.create(attr_type: "Cuisinse", name: "French")
attr8 = AttributeItem.create(attr_type: "Cuisinse", name: "American")
attr9 = AttributeItem.create(attr_type: "Cuisinse", name: "Chinese")
attr10 = AttributeItem.create(attr_type: "Cuisinse", name: "Burgers")
attr11 = AttributeItem.create(attr_type: "Cuisinse", name: "Atlantian")
attr12 = AttributeItem.create(attr_type: "Cuisinse", name: "Indian")
attr13 = AttributeItem.create(attr_type: "Neighborhood", name: "The Shire")
attr14 = AttributeItem.create(attr_type: "Neighborhood", name: "Hogsmeade")
attr15 = AttributeItem.create(attr_type: "Neighborhood", name: "Diagon Alley")
attr16 = AttributeItem.create(attr_type: "Neighborhood", name: "Helm's Deep")
attr17 = AttributeItem.create(attr_type: "Neighborhood", name: "Atlantis")
attr18 = AttributeItem.create(attr_type: "Business Type", name: "Wand Repair")
attr19 = AttributeItem.create(attr_type: "Business Type", name: "Potion Supplies")
attr20 = AttributeItem.create(attr_type: "Business Type", name: "Curse Removal")
attr21 = AttributeItem.create(attr_type: "Business Type", name: "Restaurant")
attr22 = AttributeItem.create(attr_type: "Misc Attribute", name: "Takeout")
attr23 = AttributeItem.create(attr_type: "Misc Attribute", name: "Reservations")
attr24 = AttributeItem.create(attr_type: "Misc Attribute", name: "Waiter Service")
attr25 = AttributeItem.create(attr_type: "Misc Attribute", name: "Outdoor Seating")
attr26 = AttributeItem.create(attr_type: "Misc Attribute", name: "Good for Groups")
attr27 = AttributeItem.create(attr_type: "Misc Attribute", name: "Happy Hour")
attr28 = AttributeItem.create(attr_type: "Misc Attribute", name: "Delivery")
attr29 = AttributeItem.create(attr_type: "Misc Attribute", name: "Full Bar")
attr30 = AttributeItem.create(attr_type: "Misc Attribute", name: "Wi-Fi")
attr31 = AttributeItem.create(attr_type: "Misc Attribute", name: "Good for Kids")
attr32 = AttributeItem.create(attr_type: "Misc Attribute", name: "Pets Allowed")
attr33 = AttributeItem.create(attr_type: "Misc Attribute", name: "Wheelchair Accessible")

# Seed Business
business1 = Business.create(name: "Business 1", address:"address1", latitude: -37.872125, longitude: 175.682933)
business2 = Business.create(name: "Business 2", address:"address2", latitude: -37.872125, longitude: 175.682933)
business3 = Business.create(name: "Business 3", address:"address3", latitude: -37.872125, longitude: 175.682933)

# Seed HoursOfOperation
sunOpen = HoursOfOperation.create(day: 0, biz_time: 10)
sunClose = HoursOfOperation.create(day: 0, biz_time: 22)
monOpen = HoursOfOperation.create(day: 1, biz_time: 10)
monClose = HoursOfOperation.create(day: 1, biz_time: 22)
tuesOpen = HoursOfOperation.create(day: 2, biz_time: 10)
tuesClose = HoursOfOperation.create(day: 2, biz_time: 22)
wedOpen = HoursOfOperation.create(day: 3, biz_time: 10)
wedClose = HoursOfOperation.create(day: 3, biz_time: 22)
thursOpen = HoursOfOperation.create(day: 4, biz_time: 10)
thursClose = HoursOfOperation.create(day: 4, biz_time: 22)
friOpen = HoursOfOperation.create(day: 5, biz_time: 10)
friClose = HoursOfOperation.create(day: 5, biz_time: 23)
satOpen = HoursOfOperation.create(day: 6, biz_time: 10.5)
satClose = HoursOfOperation.create(day: 6, biz_time: 23)

# Seed Menu
menu1 = Menu.create(business_id: business1.id)
menu2 = Menu.create(business_id: business2.id)
menu3 = Menu.create(business_id: business3.id)

# Seed MenuItem
menuItem1 = MenuItem.create(menu_id: menu1.id, title: "Boiled Newt", price: 1.5)
menuItem2 = MenuItem.create(menu_id: menu1.id, title: "Rabbit Feet", price: 2.5)
menuItem3 = MenuItem.create(menu_id: menu2.id, title: "Butterbeer", price: 5)
menuItem4 = MenuItem.create(menu_id: menu2.id, title: "Floating Chocolate Pie", price: 10.5)
menuItem5 = MenuItem.create(menu_id: menu3.id, title: "Mutton", price: 12)
menuItem6 = MenuItem.create(menu_id: menu3.id, title: "Frog Leg Tacos", price: 7)

# Seed User
demoUser =  User.create(email: "demo@mail.com", f_name: "demo", l_name: "demo", password: "password", zip_code:11111)
user1 = User.create(email: "user1@mail.com", f_name: "user1", l_name: "user1", password: "password", zip_code:11111)
user2 = User.create(email: "user2@mail.com", f_name: "user2", l_name: "user2", password: "password", zip_code:11111)
user3 = User.create(email: "user3@mail.com", f_name: "user3", l_name: "user3", password: "password", zip_code:11111)

# Seed Review
review1 = Review.create(user_id: user1.id, business_id: business1.id, rating: 5, body: "Review One, Testing Reviews")
review2 = Review.create(user_id: user2.id, business_id: business2.id, rating: 4, body: "Review Two, Testing Reviews")
review3 = Review.create(user_id: user3.id, business_id: business3.id, rating: 3, body: "Review Three, Testing Reviews")
review4 = Review.create(user_id: user1.id, business_id: business2.id, rating: 3, body: "Review Four, Testing Reviews")

# Seed AttributeLists: Joins table for Bussiness and AttributeItem
AttrListB1A1 = AttributeList.create(business_id: business1.id, attribute_item_id: attr1.id)
AttrListB1A13 = AttributeList.create(business_id: business1.id, attribute_item_id: attr13.id)
AttrListB1A21 = AttributeList.create(business_id: business1.id, attribute_item_id: attr21.id)
AttrListB1A30 = AttributeList.create(business_id: business1.id, attribute_item_id: attr30.id)
AttrListB1A35 = AttributeList.create(business_id: business1.id, attribute_item_id: attr25.id)
AttrListB1A33 = AttributeList.create(business_id: business1.id, attribute_item_id: attr33.id)

AttrListB2A2 = AttributeList.create(business_id: business2.id, attribute_item_id: attr2.id)
AttrListB2A3 = AttributeList.create(business_id: business2.id, attribute_item_id: attr3.id)
AttrListB2A16 = AttributeList.create(business_id: business2.id, attribute_item_id: attr16.id)
AttrListB2A21 = AttributeList.create(business_id: business2.id, attribute_item_id: attr21.id)
AttrListB2A24 = AttributeList.create(business_id: business2.id, attribute_item_id: attr24.id)
AttrListB2A32 = AttributeList.create(business_id: business2.id, attribute_item_id: attr32.id)
AttrListB2A33 = AttributeList.create(business_id: business2.id, attribute_item_id: attr33.id)

AttrListB3A8 = AttributeList.create(business_id: business3.id, attribute_item_id: attr8.id)
AttrListB3A10 = AttributeList.create(business_id: business3.id, attribute_item_id: attr10.id)
AttrListB3A17 = AttributeList.create(business_id: business3.id, attribute_item_id: attr17.id)
AttrListB3A21 = AttributeList.create(business_id: business3.id, attribute_item_id: attr21.id)
AttrListB3A27 = AttributeList.create(business_id: business3.id, attribute_item_id: attr27.id)
AttrListB3A29 = AttributeList.create(business_id: business3.id, attribute_item_id: attr29.id)
AttrListB3A33 = AttributeList.create(business_id: business3.id, attribute_item_id: attr33.id)

# Seed SharedBusinessHours: Joins table for businesses and hours_of_operation
sbhB1H1 = SharedBusinessHour.create(business_id: business1.id, hours_of_operation_id: sunOpen.id)
sbhB1H1 = SharedBusinessHour.create(business_id: business1.id, hours_of_operation_id: sunClose.id)
sbhB1H1 = SharedBusinessHour.create(business_id: business1.id, hours_of_operation_id: monOpen.id)
sbhB1H1 = SharedBusinessHour.create(business_id: business1.id, hours_of_operation_id: monClose.id)
sbhB1H1 = SharedBusinessHour.create(business_id: business2.id, hours_of_operation_id: wedOpen.id)
sbhB1H1 = SharedBusinessHour.create(business_id: business2.id, hours_of_operation_id: wedClose.id)
sbhB1H1 = SharedBusinessHour.create(business_id: business2.id, hours_of_operation_id: thursOpen.id)
sbhB1H1 = SharedBusinessHour.create(business_id: business2.id, hours_of_operation_id: thursClose.id)
sbhB1H1 = SharedBusinessHour.create(business_id: business2.id, hours_of_operation_id: friOpen.id)
sbhB1H1 = SharedBusinessHour.create(business_id: business2.id, hours_of_operation_id: friClose.id)
sbhB1H1 = SharedBusinessHour.create(business_id: business3.id, hours_of_operation_id: friOpen.id)
sbhB1H1 = SharedBusinessHour.create(business_id: business3.id, hours_of_operation_id: friClose.id)
sbhB1H1 = SharedBusinessHour.create(business_id: business3.id, hours_of_operation_id: satOpen.id)
sbhB1H1 = SharedBusinessHour.create(business_id: business3.id, hours_of_operation_id: satClose.id)