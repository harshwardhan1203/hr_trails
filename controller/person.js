const person = require("../models/person");

exports.person_post_api = async (req, res) => {
  try {
    const { name, relationship, email, address, is_active, password } =
      req.body;

    let personData = {
      name: name,
      relationship: relationship,
      email: email,
      address: address,
      is_active: is_active,
      password: password,
    };
    if (password.length <= 8) {
      const data = await person.insert_person_data(personData);
      res.status(200).send({ success: true, message: "Person added", data });
    } else {
      res.status(200).send({
        success: false,
        message: "password should be of lenth 8 or less",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error adding person" });
  }
};

exports.person_get_api = async (req, res) => {
  try {
    const data = await person.display_person_data();
    res.status(200).send({ success: true, data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error fetching persons" });
  }
};

exports.person_update_api = async (req, res) => {
  try {
    const { field, data, id } = req.body;
    const result = await person.update_person_data(field, data, id);
    res.status(200).send({ success: true, message: "Person updated", result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error updating person" });
  }
};
