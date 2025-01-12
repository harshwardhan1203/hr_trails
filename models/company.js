const query = require("../connection");

var company = function (value) {};

company.insert_company_data = async function (comp) {
  try {
    let sql =
      `INSERT INTO company (name, address, email, phone, industry, company_gst, is_active) ` +
      `VALUES` +
      `('${comp.name}','${comp.address}','${comp.email}',${comp.phone},'${comp.industry}',${comp.company_gst},'${comp.is_active}');`;
    data = await query(sql);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

company.display_company_data = async function () {
  try {
    let sql = `select * from company ;`;
    data = await query(sql);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

company.update_company_data = async function (field, data, id) {
  try {
    let sql = `UPDATE company SET ${field}='${data}' WHERE company_id = ${id};`;

    data = await query(sql);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};


module.exports = company;
