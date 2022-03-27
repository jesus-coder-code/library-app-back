const express = require("express");
const books = require("./routes/books");
const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "api de biblioteca-libreria" });
});

app.use("/books", books);

app.listen(port, () => {
  console.log("server is running on port:", port);
});
