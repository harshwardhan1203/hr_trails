const banking = require("../models/banking");

exports.banking_post_api = async (req, res) => {
  try {
    const { bank_name, account_number, ifsc_code, branch_name } = req.body;

    let bank = {
      bank_name: bank_name,
      account_number: account_number,
      ifsc_code: ifsc_code,
      branch_name: branch_name,
    };
    if (
      bank_name === undefined ||
      account_number === undefined ||
      ifsc_code === undefined ||
      branch_name === undefined
    ) {
      res.status(200).send("fields required");
    } else {
      const data = await banking.insert_banking_data(bank);
      res
        .status(200)
        .send({ success: true, message: "Banking details added", data });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error adding banking details" });
  }
};

exports.banking_get_api = async (req, res) => {
  try {
    const data = await banking.display_banking_data();
    res.status(200).send({ success: true, data });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error fetching banking details" });
  }
};

exports.banking_update_api = async (req, res) => {
  try {
    const { field, data, id } = req.body;
    if (field === undefined || data === undefined || id === undefined) {
      res.status(200).send("fields required");
    } else {
      const result = await banking.update_banking_data(field, data, id);
      res
        .status(200)
        .send({ success: true, message: "Banking details updated", result });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error updating banking details" });
  }
};
