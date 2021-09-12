const express = require("express");
const resourceNameRouter = require("./routes/resourceNameRoutes");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");
const app = express();

/* MIDDLEWARES */
app.use(express.json()); /* Body parser middleware to get form data */
/* CUSTOM MIDDLEWARES */
app.use((req, res, next) => {
  console.log("Hello from the middleware");
  // req.requestTime = new Date().toISOString(); /* Update the request object */
  next();
});

// ROUTES
app.use("/api/v1/resource-name", resourceNameRouter);

// FOR ALL UNHANDLED ROUTES
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

// ERROR ROUTE
app.use(globalErrorHandler);

module.exports = app;
