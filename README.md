# City Explorer

[Hosted URL](https://infallible-hoover-86c1aa.netlify.com/)

## Components:

* Homepage.js:
  * renders all of the different container components
  * renders the header, input field, and submit button
  * renders the google map

* Containers:
  * hikingContainer.js: 
    * renders the hiking api column and passes through the data correctly.
  * meetupContainer.js
    * renders the meetup api column and passes through the data correctly.
  * movieContainer.js:
    * renders the movie api column and passes through the data correctly.
  * yelpContainer.js:
    * renders the yelp api column and passes through the data correctly.
    

  ## Modules:
  * homepage.js:
    * setLocation(e):
      * change the state of the component to whatever the searched value is at that time.
      
    * submitButton(e):
      * when the submit button is clicked, prevent default and get the the data.
    
    * getData():
      * get the initial location data from the google api, then use those results to call the getResource function with the data and their specific api type.
    
    * getResource(resource, location):
      * call the backend /resource and set the result equal to the state at the name of that resource.
 
