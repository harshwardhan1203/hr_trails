const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
// app.use(express.static("./public"));

const attendanceRoute = require("./routes/attendence");
const bankingRoutes = require("./routes/banking");
const companyRoutes = require("./routes/company");
const educationRoutes = require("./routes/education");
const employeeRoutes = require("./routes/employee");
const personRoutes = require("./routes/person");
const time_offRoutes = require("./routes/time_off");
const loginRoute = require("./routes/login.js");

const swaggerDoc = require("./swagger-config.js");
swaggerDoc(app);

app.use("/login", loginRoute);
app.use("/attendence", attendanceRoute);
app.use("/banking", bankingRoutes);
app.use("/company", companyRoutes);
app.use("/education", educationRoutes);
app.use("/employee", employeeRoutes);
app.use("/person", personRoutes);
app.use("/time_off", time_offRoutes);

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.listen(port, (err) => {
  console.log(`running at port ${port}`);
});
