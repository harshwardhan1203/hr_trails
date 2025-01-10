const company = require("../models/company");

exports.company_post_api = async (req, res) => {
  try {
    const { name, address, email, phone, industry, company_gst, is_active } =
      req.body;
    let comp = {
      name: name,
      address: address,
      email: email,
      phone: phone,
      industry: industry,
      company_gst: company_gst,
      is_active: is_active,
    };
    data = company.insert_company_data(comp);
    // res.send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.display_get_api = async (req, res) => {
  try {
    const log = company.display_company_data();
    // res.send(log);
    console.log(log);
    res.send("hello world");
  } catch (error) {
    console.log(error);
  }
};

exports.update_put_api = async (req, res) => {
  try {
    const { field, data, id } = req.body;
    company.update_company_data(field, data, id);
    res.send("update query succesful");
  } catch (error) {
    console.log(error);
  }
};
