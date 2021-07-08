const mongoose = require("mongoose");

// const config = require('./db.config');

const uri = process.env.DB_URI;
// const uri = `${config.uri}:${config.port}/${config.collection}`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", function () {
  console.log(`DB connection established`);
});
