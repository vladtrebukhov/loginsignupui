const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const dev = process.env.port !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 3000;

mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected!");
});

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
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
