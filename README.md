# Alert_Hero

Emergency messaging app for use in hospitals, schools, and other settings, especially where a small group of people needs to manage and ensure the safety of a large group of people.

# Logo update
Alert Hero team, please have a look at the first draft of the logo in the resources directory.

# Directory structure
Alert Hero is made up of three different apps. The admin app allows users to add and remove recipient users, make changes to recipient groups, and view and search the message histories. The message sending app allows users to send messages, and view sent messages. The recipient app actually tracks the user's location, and turns message reception on or off depending on whether they are on site. It is not possible for the user's location to be seen by any other type of user in any other app, nor is the location data stored anywhere.

The db folder contains configuration and models code for accessing and changing the database. The mobile folder contains mobile client apps. The admin folder will contain the administrative user app. 
