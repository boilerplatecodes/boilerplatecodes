const express = require("express");
const resourceNameController = require("../controllers/resourceNameController");

const router = express.Router();

// Param middleware to perform checks on params.
router.param("id", resourceNameController.checkParam);

// Routes
router
  .route("/")
  .get(resourceNameController.getAllResources)
  .post(resourceNameController.createResource);

router
  .route("/:id")
  .get(resourceNameController.getResource)
  .patch(resourceNameController.updateResource)
  .delete(resourceNameController.deleteResource);

module.exports = router;
