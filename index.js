// index.js

const express = require("express");
const connectDB = require("./config/db.js");
var cors = require("cors");

// routes
const userRouter = require("./routes/user"); //auth
//const books = require("./routes/api/books");
const parts = require("./routes/api/parts"); //parts
const customers = require("./routes/api/customers");

const app = express();

app.disable("etag");
app.use(express.json()); //xx
app.use(userRouter); //auth

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.send("Welcome to Anginz! \n github.com/ebonynon")
);
app.get("/users", (req, res) => res.send("He.. user! \n github.com/ebonynon"));

// use Routes
//app.use("/api/books", books);
app.use("/api/parts", parts); //parts
app.use("/api/customers", customers);
app.use("/users", userRouter);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
