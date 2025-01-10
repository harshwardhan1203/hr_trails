const query = require("../connection");

var banking = function (value) {};

banking.insert_banking_data = async function (bank) {
  try {
    let sql =
      `INSERT INTO banking (bank_name, account_number, ifsc_code, branch_name) ` +
      `VALUES ` +
      `('${bank.bank_name}', '${bank.account_number}', '${bank.ifsc_code}', '${bank.branch_name}');`;
    let data = await query(sql);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

banking.display_banking_data = async function () {
  try {
    let sql = `SELECT * FROM banking;`;
    let data = await query(sql);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

banking.update_banking_data = async function (field, data, id) {
  try {
    let sql = `UPDATE banking SET ${field}='${data}' WHERE banking_id = ${id};`;
    let result = await query(sql);
    return result;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

module.exports = banking;
