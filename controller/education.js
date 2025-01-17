const education = require("../models/education");

exports.education_post_api = async (req, res) => {
  try {
    const { degree, institution, field_of_study, start_year, end_year, grade } =
      req.body;

    let edu = {
      degree: degree,
      institution: institution,
      field_of_study: field_of_study,
      start_year: start_year,
      end_year: end_year,
      grade: grade,
    };
    if (
      degree === undefined ||
      institution === undefined ||
      field_of_study === undefined ||
      start_year === undefined ||
      end_year === undefined ||
      grade === undefined
    ) {
      res.status(200).send("fields required");
    } else {
      const data = await education.insert_education_data(edu);
      // res.status(200).send({ success: true, message: "Education record added", data });
      res.redirect("/education/educationRoute");
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error adding education record" });
  }
};

exports.education_get_api = async (req, res) => {
  try {
    const data = await education.display_education_data();
    // res.status(200).send({ success: true, data });
    res.status(200).render("education.ejs", { data: data });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error fetching education records" });
  }
};

exports.education_update_api = async (req, res) => {
  try {
    const { field, data, id } = req.body;
    if (field === undefined || data === undefined || id === undefined) {
      res.status(200).send("fields required");
    } else {
      const result = await education.update_education_data(field, data, id);
      res
        .status(200)
        .send({ success: true, message: "Education record updated", result });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error updating education record" });
  }
};
