const express = require("express");
const router = express.Router();

const employeeRoute = require("../controller/employee");

router.route("/employeeRoute").post(employeeRoute.employee_post_api);

module.exports = router;
