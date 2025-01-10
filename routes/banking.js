const express = require("express");
const router = express.Router();

const bankingRoute = require("../controller/banking");

router
  .route("/bankingRoute")
  .get(bankingRoute.banking_get_api)
  .post(bankingRoute.banking_post_api)
  .put(bankingRoute.banking_update_api);

module.exports = router;
