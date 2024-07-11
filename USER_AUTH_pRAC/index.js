const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRout = require("./route/admin");
// const userRout = require("./route/user");

app.use(bodyParser.json());
app.use("/admin", adminRout);
// app.use("/user", userRout);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
