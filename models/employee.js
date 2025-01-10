const query = require("../connection");

var employee = function (value) {};

employee.insert_employee_data = async function (emp) {
  try {
    let sql =
      `INSERT INTO employee (first_name, last_name, email, phone, date_of_birth, gender, position, date_of_joining, salary, is_active) ` +
      `VALUES ` +
      `('${emp.first_name}', '${emp.last_name}', '${emp.email}', '${emp.phone}', '${emp.date_of_birth}', '${emp.gender}', '${emp.position}', '${emp.date_of_joining}', ${emp.salary}, '${emp.is_active}');`;
    let data = await query(sql);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

employee.display_employee_data = async function () {
  try {
    let sql = `SELECT * FROM employee;`;
    let data = await query(sql);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

employee.update_employee_data = async function (field, data, id) {
  try {
    let sql = `UPDATE employee SET ${field}='${data}' WHERE employee_id = ${id};`;
    let result = await query(sql);
    return result;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

module.exports = employee;
