const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const app = require("./app");
const mongoose = require("mongoose");

const DB = process.env.DATABASE ? process.env.DATABASE : process.env.DATABASE_LOCAL;
mongoose.connect(DB).then(con => {
    console.log("MongoDB database connected.")
}).catch(err => {
    console.log("Could not connect to Mongodb database", err)
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("App running on port " + PORT)
})