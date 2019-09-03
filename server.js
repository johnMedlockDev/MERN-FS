const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// DBConfig
const db = require("./config/keys").mongoURI;

//Connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Port app is servered on
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
