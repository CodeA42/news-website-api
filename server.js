const express = require("express");
require("dotenv").config();

const app = express();

//Init db
require("./db/db");

//Init router
const router = require("./routes/router");

//Init express
require("./express")(app);
app.use(router);
