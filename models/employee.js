const query = require("../connection");

var employee = function (value) {};


company.insert_employee_data = async function (emp) {
  try {
    let sql =
      `INSERT INTO company (first_name,last_name,email,phone,date_of_birth,gender,position,date_of_joining,salary,is_active) ` +
      `VALUES` +
      `('${emp.first_name}','${emp.last_name}','${emp.email}',${emp.phone},'${emp.date_of_birth}',${emp.gender},'${emp.position}','${emp.date_of_joining}','${emp.salary}','${emp.is_active}');`;
    data = await query(sql);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};