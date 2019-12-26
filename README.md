<img src=app/assets/images/jinx_logo.png style="display: flex; width: 50%; margin: auto" /> 

## Welcome to [Jinx](https://jinx-fullstack.herokuapp.com/#/), a [Yelp](https://www.yelp.com/) for wizards! 

### Here, the wizarding community can find the latest businesses for all of their needs, with reviews and ratings by their peers.

### This site was made using SQL, Ruby on Rails, React, & Redux.

### Users can:
* Search for businesses by name and various attributes
* Read review left by other users
* Create and update reviews once logged in

### Businesses Include but are not limited to:
* Restaurants
* Potion Supply Stores
* Wand Repair Shops
* Broom Dealerships
* Emergency Curse Removal 

### Business attributes include:
* Average User Rating
* Location (with marker on map)
* Neighborhood
* Hours of Operation
* Serivces Offered
* Cuisine
* Menu and Menu Items
* Misc Attributes (Happy Hour, Wi-Fi, Wheelchair Accessible, etc.)

---

### It was my goal not just to build a clone of Yelp, but add new aspects to show off the React-Redux cycle. 
### Some of the additional Functionality not available on Yelp:
* Search results are clearly broken by category in the search dropdown menu. The search will work for any attribute a business may have.
  <img src=app/assets/images/search_bar.gif style="display: flex; width: 60%; margin: 10px auto"/>

* To make yelp more dynamic and feature some of the aspects of the React-Redux cycle, users can now post reviews on the same page as the business they're viewing rather than being redirected to another page.
  <img src=app/assets/images/post_review.gif style="display: flex; width: 60%; margin: 10px auto"/>

* To further exemplify the power and amazing user inteface possible with React and Redux, users can seemlessly edit their post inline where their post is being viewed.
  <img src=app/assets/images/update_review.gif style="display: flex; width: 60%; margin: 10px auto"/>

* The Log In button now renders a modal for users to login without leaving the page. The login page is still available as a link in the sign up page.

* Writing a review from the business show page renders a modal for users to write a review, rather than redirecting users to a new page.

---

### Code Snippets:
* The following code was used for the search bar and displaying the search results filtered by category in the dropdown display menu. 

In the database, all attributes of a business are stored under a instance of AttributeItem. Each AttribtueItem has a category (attr_type) and a name (name). All attributes are created by the develeoper and businesses will pick which attributes apply to them. Attributes are connected to businesses by a has_many joins table. Therefore, there are a limited number of attributes that will be created.

As soon as we fetch all businesses in the database, we sort all attributes by catergory and store the searchable attributes in our state. So our search slice of state contains all attributes and the business IDs they point to. All searching is done on the front end and does not need to access the database until the user goes to our search result.
  <img src=app/assets/images/search_bar_code.png style="display: flex; width: 90%; margin: 10px auto"/>

* The following code was used to render the update form for a review inline with where the review was displayed. CSS styling was used to make sure the update form and displayed review will be a pixel perfect match, providing a seamless user interface. 
  <img src=app/assets/images/update_review_pt1.png style="display: flex; width: 90%; margin: 10px auto"/>
  <img src=app/assets/images/update_review_pt2.png style="display: flex; width: 90%; margin: 10px auto"/>

---

### Navigating Code:
* All code is written in the traditional Rails and Redux framework.

### Features to be added:
* Search results page
* Filters for search results (Neighborhoods, Cuisines, Services, Misc Attributes)
* Business index items show average user rating
* Users can upload images
* In the review section of the business show page, users can optionally just leave a rating. Below the area to leave a rating, a button "Write a Review" which renders a dropdown where users can optionally wrtie a review body and/or upload an image.

### Credits:
* The logos were made by Keri Collins, kericollinsdesign.com
* Images are all public domain and stock photos taken from shutterstock.com