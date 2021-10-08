const express = require("express");
const mongoCon = require("./connect/connect");
const router = require("./routes/products");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/products", router);

app.use(express.static("public"));

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoCon(process.env.MONGO_URI);

    app.listen(port, () => console.log("connected"));
  } catch (e) {
    console.log(e);
  }
};

start();

// /storage/emulated/0/SunnyProject/node-project
