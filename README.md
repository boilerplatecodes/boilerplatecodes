## Express Mongodb app
This is an express app that provides out of the box express route handling, standard response pattern, mongoDB connection, mongoDB modeling.

> **_NOTE:_** This is based on Jonas Schmedtmann's [Node.js, Express, MongoDB & More: The Complete Bootcamp 2021](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/) course on udemy.

### Pre-requisite
- If connecting to local database, MongoDB must be installed and running.

#### Steps
1. Clone the repository.
```
git clone -b express-mongodb https://github.com/boilerplatecodes/boilerplatecodes.git
```
2. Remove `git` from the project and initialze as a new git project.
```
rm -rf .git
git init
```
3. Change the folder name to your project name. Also inside `package.json` change the `name` property to your project name.
4. Install dependencies.
```
npm i
```
5. Create a `config.env` in root directory and set the basic configurations
```
PORT=4567
DATABASE=
DATABASE_LOCAL=mongodb://localhost:27017/test
``` 
6. Start the project.
```
npm start
```
> **_NOTE:_**  If connecting to local database, MongoDB must be installed and running.

    The console should now be saying
```
App running on port 4567
MongoDB database connected.
```

7. Now you can the test the API endpoints present in `app.js` or start building your MVC based express app.
8. Delete `resource-name` or `resourceName` refrences and files for a clean app. Or keep them as a refrence to build the application. Or replace `resource-name` or `resourceName` with the name of your resource, for example `user` or `item` etc.
