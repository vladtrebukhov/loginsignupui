const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dev = process.env.port !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of next config
const port = 3000;

mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected!");
});

nextApp
  .prepare()
  .then(() => {
    const app = express();
    app.use(bodyParser.json());

    app.get("*", (req, res) => {
      return handle(req, res); //required for next, for all the react stuff
    });

    app.listen(port, err => {
      if (err) {
        throw err;
      }
      console.log(`Listening on port ${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
  date: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("user", userSchema);
