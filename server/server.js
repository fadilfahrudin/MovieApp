const express = require("express");
const axios = require("axios").default;
const multer = require("multer");
const path = require("path");
const jsonServer = require("json-server");
const cors = require("cors");
// const qs = require("qs");
const url = require("url");

const app = express();
const PORT = 5000;

// middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// set configuration storage
const storage = multer.diskStorage({
	destination: (res, file, cb) => {
		cb(null, "./public/images");
	},
	filename: (res, file, cb) => {
		cb(
			null,
			new Date().getTime() +
				"_" +
				path.parse(file.originalname).name +
				path.extname(file.originalname)
		);
	},
});

const upload = multer({ storage });

// post new movie
app.post("/api/movie/create", upload.single("poster"), async (req, res) => {
	let pathPoster =
		req.protocol + "://" + req.get("host") + "/images/" + req.file.filename;
	const { title, genre, description, year } = req.body;

	try {
		const response = await (
			await axios.post(`http://localhost:${PORT}/api/movies`, {
				title: title,
				genre: genre,
				year: year,
				description: description,
				poster: pathPoster,
			})
		).data;
		res
			.status(200)
			.json({ message: "New Movies saved successfully", movies: response });
	} catch (error) {
		res.status(500).json({ message: "There is someting error", error: error });
	}
});

// update movies
app.put("/api/movies/update", upload.single("poster"), async (req, res) => {
	let pathPoster = "";
	const { id, title, description, genre, year, poster } = req.body;

	if (req.file === undefined) {
		pathPoster = poster;
	} else {
		pathPoster =
			req.protocol + "://" + req.get("host") + "/images/" + req.file.filename;
	}

	try {
		const response = await (
			await axios.put(`http://localhost:5000/api/movies/${id}`, {
				title: title,
				genre: genre,
				year: year,
				description: description,
				poster: pathPoster,
			})
		).data;
		res.status(200).json({
			message: "Movie updated successfully",
			movies: response,
		});
	} catch (error) {
		res.status(500).json({ error: error });
	}
});

app.use("/api", jsonServer.router(path.join(__dirname, "db.json")));

app.listen(PORT, console.log(`Listening on http://localhost:${PORT}`));
