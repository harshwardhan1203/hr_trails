const time_off = require("../models/time_off");

exports.time_off_post_api = async (req, res) => {
  try {
    const { leave_type, start_date, end_date, reason, status } = req.body;

    let leave = {
      leave_type: leave_type,
      start_date: start_date,
      end_date: end_date,
      reason: reason,
      status: status,
    };

    if (
      leave_type === undefined ||
      start_date === undefined ||
      end_date === undefined
    ) {
      res.status(200).send("fields required");
    } else {
      const data = await time_off.insert_time_off_data(leave);
      res
        .status(200)
        .send({ success: true, message: "Time off request added", data });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error adding time off request" });
  }
};

exports.time_off_get_api = async (req, res) => {
  try {
    const data = await time_off.display_time_off_data();
    res.status(200).send({ success: true, data });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error fetching time off records" });
  }
};

exports.time_off_update_api = async (req, res) => {
  try {
    const { field, data, id } = req.body;
    const result = await time_off.update_time_off_data(field, data, id);

    if (field === undefined || data === undefined || id === undefined) {
      res.status(200).send("fields required");
    } else {
      res
        .status(200)
        .send({ success: true, message: "Time off request updated", result });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error updating time off request" });
  }
};
