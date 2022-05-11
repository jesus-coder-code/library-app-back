const express = require("express");
const books = require("./routes/books");
const users = require("./routes/users");
const port = process.env.PORT || 5000;

require("./db/database");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "api de biblioteca-libreria" });
});

app.use("/books", books);
app.use("/users", users);

app.listen(port, () => {
  console.log("server is running on port:", port);
});
