const express = require("express");
const router = express.Router();

const timeOffRoute = require("../controller/time_Off");

router
  .route("/timeOffRoute")
  .get(timeOffRoute.time_off_get_api)
  .post(timeOffRoute.time_off_post_api)
  .put(timeOffRoute.time_off_update_api);

module.exports = router;
