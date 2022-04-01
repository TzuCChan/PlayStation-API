# playstation-api

In this project, I will be creating an API for PlayStations by using JSON and Mongoose.

## Technologies

1. Mongodb
2. Express
3. Postman
4. Visual Studio Code
5. iTerm
6. JavaScript

## Sources

1. Google
2. Wikipedia

# Methods

1. Create a file on the terminal.

2. Install the JSON by running echo "{}" > package.json on the terminal.

3. Type Npm install express mongoose on the terminal to make sure the the express and the mongoose is running.

4. After everything is set up, I create the index.js file, playstations.json, playstation.js, data.js, server.js, playstation.js routes, and playstation.js controllers.

5. Set up the shcema for Playstation in the playstation.js file.

6. Create the Models on the playstations.json file with the information I found from the Wikipedia.

7. create the import on server.js to connect all the JSON file

8. on .gitignore, I set up the /node_modules, .DS_Store, and .env to make sure all the file will run properly when I connected the database.

9. Return to the terminal and type Npm start to connected the database.

10. To make sure the file is running, I typed monggosh and show dbs and show collections to list the API that I created for the Playstation.

11. In order to check create, update, and delete work properly, I used db.Playstation.find({}) to test if they work. Turns out it works fine!

12. One last thing for this project is to connect the PORT to the Postman to see if it also work. Turns out the API I created work perfectly fine too on the Postman.
