const query = require("../connection");

var attendance = function (value) {};

attendance.insert_attendance_data = async function (att) {
  try {
    let sql =
      `INSERT INTO attendance (date, check_in, check_out, status, start_time, end_time, location_at_start_time, ip_address, location_at_end_time) ` +
      `VALUES ` +
      `('${att.date}', '${att.check_in}', '${att.check_out}', '${att.status}', '${att.start_time}', '${att.end_time}', '${att.location_at_start_time}', '${att.ip_address}', '${att.location_at_end_time}');`;
    let data = await query(sql);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

attendance.display_attendance_data = async function () {
  try {
    let sql = `SELECT * FROM attendance;`;
    let data = await query(sql);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

attendance.update_attendance_data = async function (field, data, id) {
  try {
    let sql = `UPDATE attendance SET ${field}='${data}' WHERE attendence_id = ${id};`;
    let result = await query(sql);
    return result;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

module.exports = attendance;
