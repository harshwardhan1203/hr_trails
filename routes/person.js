const express = require("express");
const router = express.Router();

const personRoute = require("../controller/person");

router
  .route("/personRoute")
  .get(personRoute.person_get_api)
  .post(personRoute.person_post_api)
  .put(personRoute.person_update_api);

module.exports = router;
