const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const databaseConn = require("./config/connection");

const reviewRoutes = require("./Routes/Reviews");

// SETUP

const app = express();
const port = process.env.PORT || 8002;
// connecting to database
databaseConn();

// MIDDLEWARE

// parse incoming request
app.use(express.json());
// parse incoming request with urlencoded payloads
app.use(express.urlencoded({ extended: false }));

// Routes

// review routes
app.use("/api/reviews", reviewRoutes);

app.get("/api/test", (req, res) => res.json({ working: `till here` }));

app.listen(port, () => console.log(`listening on port ${port}`));
