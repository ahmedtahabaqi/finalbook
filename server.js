const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./router/book.js");
const fileupload = require("express-fileupload");
mongoose.connect(
  "mongodb://ahmedtaha:AAaa1234@ds255309.mlab.com:55309/ahmedtaha",
  { useNewUrlParser: true }
);

//  To Check if the connection works fine or not
mongoose.connection.on("connected", () => {
  console.log("\x1b[36m%s\x1b[0m", "mongo has been connected...");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(fileupload());
app.use("/book", router);
app.use(express.static("./upimg"));
app.use(express.static("./upfile"));

port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`the server connect on http://localhost:${port}`)
);

module.exports = app;
