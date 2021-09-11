const express = require("express");
const resourceNameRouter = require("./routes/resourceNameRoutes");
const app = express();

/* MIDDLEWARES */
app.use(express.json()); /* Body parser middleware to get form data */
/* CUSTOM MIDDLEWARES */
app.use((req, res, next) => {
    console.log("Hello from the middleware");
    // req.requestTime = new Date().toISOString(); /* Update the request object */
    next();
})

// ROUTES
app.use("/api/v1/resource-name", resourceNameRouter);


module.exports = app;