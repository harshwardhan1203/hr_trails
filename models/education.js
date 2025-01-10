const query = require("../connection");

var education = function (value) {};

education.insert_education_data = async function (edu) {
  try {
    let sql =
      `INSERT INTO education (degree, institution, field_of_study, start_year, end_year, grade) ` +
      `VALUES ` +
      `('${edu.degree}', '${edu.institution}', '${edu.field_of_study}', ${edu.start_year}, ${edu.end_year}, '${edu.grade}');`;
    let data = await query(sql);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

education.display_education_data = async function () {
  try {
    let sql = `SELECT * FROM education;`;
    let data = await query(sql);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

education.update_education_data = async function (field, data, id) {
  try {
    let sql = `UPDATE education SET ${field}='${data}' WHERE education_id = ${id};`;
    let result = await query(sql);
    return result;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

module.exports = education;
