const query = require("../connection");

var time_off = function (value) {};

time_off.insert_time_off_data = async function (leave) {
  try {
    let sql =
      `INSERT INTO time_off (leave_type, start_date, end_date, reason, status) ` +
      `VALUES ` +
      `('${leave.leave_type}', '${leave.start_date}', '${leave.end_date}', '${leave.reason}', '${leave.status}');`;
    let data = await query(sql);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

time_off.display_time_off_data = async function () {
  try {
    let sql = `SELECT * FROM time_off;`;
    let data = await query(sql);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

time_off.update_time_off_data = async function (field, data, id) {
  try {
    let sql = `UPDATE time_off SET ${field}='${data}' WHERE leave_id = ${id};`;
    let result = await query(sql);
    return result;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

module.exports = time_off;
