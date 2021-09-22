const express = require("express");
require("dotenv").config({path: './lib/config/.env'});

const app = express();

//Init db
require("./lib/db/db");

//Init router
const router = require("./lib/routes/router");

//Init passport
const passport = require('passport');
require('./lib/auth/passport')(passport);

//Init express
require("./express")(app);
app.use(router);
