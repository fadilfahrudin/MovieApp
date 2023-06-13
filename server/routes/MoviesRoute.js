const express = require("express");
const axios = require("axios").default;
const multer = require("multer");
const path = require("path");

const Router = express.Router();

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
Router.post("/create", upload.single("poster"), async (req, res) => {
	let pathPoster =
		req.protocol + "://" + req.get("host") + "/images/" + req.file.filename;
	const { title, genre, description, year, production, trailer } = req.body;

	try {
		const response = await (
			await axios.post(`http://localhost:5000/api/movies`, {
				title: title,
				production: production,
				trailer: trailer,
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

// update  movie
Router.put("/update", upload.single("poster"), async (req, res) => {
	let pathPoster = "";
	const { id, title, description, genre, year, poster, production, trailer } =
		req.body;

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
				production: production,
				trailer: trailer,
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

module.exports = Router;
