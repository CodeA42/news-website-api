const cors = require("cors");
const express = require("express");
const session = require('express-session');

const port = process.env.PORT || 5000;

function configExpress(app) {
  app.use(cors());
  app.use(express.json());

  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
}

module.exports = configExpress;
