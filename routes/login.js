const express = require("express");
const router = express.Router();

const personRoute = require("../controller/person");

router.get("/loginRoute", (req, res) => {
  res.render("login.ejs");
});
router.route("/loginRoute").post(personRoute.login_post_api);

module.exports = router;
