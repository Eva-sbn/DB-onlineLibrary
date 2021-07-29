const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/index"));

const start = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://into:intocode@cluster0.hv9gm.mongodb.net/DB-library",
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: true,
      }
    );
    app.listen(3000, () => {
      console.log("Server has been started...");
    });
  } catch (e) {
    console.log(e);
  }
};
start();
