## QuestKeeper 
QuestKeeper is a character sheet creator and storage application to make all the things you need for Dungeons and Dragons together in one place. After making an account users can add new characters and update them with new spells and weapons and they wont get mixed in with other peoples characters and spells and weapons and will stay safe behind your account. The character sheets have been laid out in a way that is easy to use where the parts you need most are accessible and the parts that deserve more space and detail are given tabs on the main page so they are easy to get to. I am glad to have finally worked on this project, it is an idea I have had in the back of my brain for a long time and now that school at App Academy is finishing up I am confident I have the skills to create it the way I want it to be. The styling of this website is inspired by the Dungeons and Dragons website so it will look official and professional. 
***
## Technology used
QuestKeeper is built using the following technologies:

Javascript
React
Redux
Python
Flask
CSS
Heroku
SQLAlchemy
PostgreSQL
***
## Future goals
In the future I plan to implement the following features:
additional tabs on the `/characters` page for abilities, items, and armors. As well as, 

***
## Live link to heroku
https://questkeeper.herokuapp.com/

***
## Local startup instructions

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/030820acc/QuestKeeper.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
