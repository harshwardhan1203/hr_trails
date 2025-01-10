const express = require("express");
const router = express.Router();

const companyRoute = require("../controller/company");

router
  .route("/companyRoute")
  .get(companyRoute.display_get_api)
  .post(companyRoute.company_post_api)
  .put(companyRoute.update_put_api);

module.exports = router;
