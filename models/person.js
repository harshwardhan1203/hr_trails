const query = require("../connection");

var person = function (value) {};

person.insert_person_data = async function (personData) {
  try {
    let sql =
      `INSERT INTO person  (name, relationship, email, address,is_active,password) ` +
      `VALUES ` +
      `( '${personData.name}', '${personData.relationship}', '${personData.email}', '${personData.address}','${personData.is_active}','${personData.password}');`;
    let data = await query(sql);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

person.display_person_data = async function () {
  try {
    let sql = `SELECT * FROM person;`;
    let data = await query(sql);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

person.update_person_data = async function (field, data, id) {
  try {
    let sql = `UPDATE person SET ${field}='${data}' WHERE person_id = ${id};`;
    let result = await query(sql);
    return result;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

module.exports = person;
