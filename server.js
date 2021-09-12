const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION, Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE
  ? process.env.DATABASE
  : process.env.DATABASE_LOCAL;
mongoose
  .connect(DB)
  .then((con) => {
    console.log("MongoDB database connected.");
  })
  .catch((err) => {
    console.log("Could not connect to Mongodb database", err);
  });

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log("App running on port " + PORT);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION, Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
