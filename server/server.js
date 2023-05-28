const express = require("express");
const path = require("path");
const jsonServer = require("json-server");
const cors = require("cors");
const MoviesRoutes = require("./routes/MoviesRoute.js");

const db = jsonServer.router(path.join(__dirname, "db.json"));
const app = express();
const PORT = 5000;

// middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/movie", MoviesRoutes);

app.use("/api", jsonServer.router(path.join(__dirname, "db.json")));

app.listen(PORT, console.log(`Listening on http://localhost:${PORT}`));
