const attendance = require("../models/attendence");

exports.attendance_post_api = async (req, res) => {
  try {
    const {
      date,
      check_in,
      check_out,
      status,
      start_time,
      end_time,
      location_at_start_time,
      ip_address,
      location_at_end_time,
    } = req.body;

    let att = {
      date: date,
      check_in: check_in,
      check_out: check_out,
      status: status,
      start_time: start_time,
      end_time: end_time,
      location_at_start_time: location_at_start_time,
      ip_address: ip_address,
      location_at_end_time: location_at_end_time,
    };

    const data = await attendance.insert_attendance_data(att);
    res
      .status(200)
      .send({ success: true, message: "Attendance recorded", data });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error recording attendance" });
  }
};

exports.attendance_get_api = async (req, res) => {
  try {
    const data = await attendance.display_attendance_data();
    res.status(200).send({ success: true, data });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error fetching attendance records" });
  }
};

exports.attendance_update_api = async (req, res) => {
  try {
    const { field, data, id } = req.body;
    const result = await attendance.update_attendance_data(field, data, id);
    res
      .status(200)
      .send({ success: true, message: "Attendance updated", result });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error updating attendance" });
  }
};
