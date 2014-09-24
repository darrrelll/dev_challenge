# Comments

Feel free to leave any comments or notes for us here (or inline with code, e.g., `###COMMENT: [your comments here]`).

##Google Maps Integration
> I was hitting an early road block on this one with getting the google API script tag to relate the javascript. I resolved this by putting the entire script in the application section. This isn't ideal, but I spent a lot of time head banging to fix this. I believe there's a quick fix to allow allow javascript files to load with the correct head script tags.
 I also changed the haml file to erg file to allow my map to display. I got the map to be on the browser with haml, but just as a thin strip on the top and I couldn't understand why.

> The google maps works with separate color pins, but a query limit max error shows up from Geocoder. Also, there are 3 `for` loops, where it would be nice to have 1. I couldn't string interpolate or place a variable in place of icon in the google.maps.Marker, so I used a loop for each red, orange and green. 

## Styling to allow for html_safe. 
> The above title section was pretty straight forward `<h4>Editing Task: <%= @task.title.html_safe %></h4>)`. The best idea I could gather from stack overflow was  `<%= f.text_field :title, class: 'form-control', value: (f.object.title.html_safe) %> `, but that didn't work either. I looked in the rubydocs at the long version of `.text _field` but I can't seem to understand how to do the longer manually entry while still remaining in the `form_for(@task)` loop.

## Write a simple docs controller Test
> I'm not sure how to test the contents of the .md.  I tried to write a passing test this with capybara. I have only used Rpsec and Capybara in the past to test Ruby and I'm not to sure about this version of the testing framework, but I thought I'd try. I don't have a solid hypothesis on this except that `test_helper` can't work with capybara in this manner.


Overall, I really enjoyed this coding challenge and learned a lot about picking up a codebase and implementing new features & fixing bugs!