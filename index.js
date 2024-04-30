const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const db = require("./users.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", db.getUsers);
app.get("/user/:id", db.getUserById);
app.post("/user", db.createUser);

app.listen(port, () => {
  console.log(`App running on port:${port}`);
});
