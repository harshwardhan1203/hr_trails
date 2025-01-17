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

person.loginUser = async function (username, password) {
  try {
    let sql = `select name from person where name='${username}';`;
    let result = await query(sql);
    // console.log(result, "result");
    if (result[0].name === username) {
      let sql = `select password from person where name='${username}';`;
      let newResult = await query(sql);
      // console.log(newResult, "newResult");
      if (newResult[0].password === password) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return 0;
  }
};

module.exports = person;
