const express = require("express");
const router = express.Router();

const attendanceRoute = require("../controller/attendence");

router
  .route("/attendanceRoute")
  .get(attendanceRoute.attendance_get_api)
  .post(attendanceRoute.attendance_post_api)
  .put(attendanceRoute.attendance_update_api);

module.exports = router;
