const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const companyRoutes = require("./routes/company");
app.use("/company", companyRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(port, (err) => {
  console.log(`running at port ${port}`);
});
