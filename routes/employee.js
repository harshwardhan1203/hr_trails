const express = require("express");
const router = express.Router();

const employeeRoute = require("../controller/employee");

router
  .route("/employeeRoute")
  .get(employeeRoute.employee_get_api)
  .post(employeeRoute.employee_post_api)
  .put(employeeRoute.employee_update_api);

module.exports = router;
