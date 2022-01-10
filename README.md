# Rock Flicker App
This app is a clone of flickr where anyone can post their favorite climbing photos.




## Install

1. To install this app locally first clone the repo from github.
2. Next, run `npm install` in both frontend and backend files to install relevent packages.
3. Create a .env and follow the .env.example
4. Go to Postgres and create a user with the username defined in the .env file. Be sure to give CREATEDB privileges.
5. Run `npx dotenv sequelize db:create` to create your database
6. You can now run `npx dotenv sequelize db:migrate` then `npx dotenv sequelize db:seed:all` to get migrate tables and create seed data.
7. Next run `npm start` in both frontend and backend files.
8. Go to your browser and open http://localhost:3000 and the site should be running.
