const express = require("express");
const router = express.Router();

const educationRoute = require("../controller/education");

router
  .route("/educationRoute")
  .get(educationRoute.education_get_api)
  .post(educationRoute.education_post_api)
  .put(educationRoute.education_update_api);

module.exports = router;
