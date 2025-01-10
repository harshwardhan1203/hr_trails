const employee = require("../models/employee");

exports.employee_post_api = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      date_of_birth,
      gender,
      position,
      date_of_joining,
      salary,
      is_active,
    } = req.body;

    let emp = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      date_of_birth: date_of_birth,
      gender: gender,
      position: position,
      date_of_joining: date_of_joining,
      salary: salary,
      is_active: is_active,
    };

    const data = await employee.insert_employee_data(emp);
    res
      .status(200)
      .send({ success: true, message: "Employee record added", data });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error adding employee record" });
  }
};

exports.employee_get_api = async (req, res) => {
  try {
    const data = await employee.display_employee_data();
    res.status(200).send({ success: true, data });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error fetching employee records" });
  }
};

exports.employee_update_api = async (req, res) => {
  try {
    const { field, data, id } = req.body;
    const result = await employee.update_employee_data(field, data, id);
    res
      .status(200)
      .send({ success: true, message: "Employee record updated", result });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error updating employee record" });
  }
};
