const mongoose = require("mongoose");

const uri = process.env.DB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log(`DB connection established`);
});

require("./models/config");
