import React, { useEffect, useState } from "react";
import "./card.css";
import axios from "axios";

const Card = ({ genre, year }) => {
	const [movies, setMovies] = useState([]);

	const getMovies = async (req, res) => {
		const responses = await axios.get("http://localhost:5000/api/movies");
		try {
			// console.log(responses.data);
			setMovies(responses.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getMovies();
	}, []);

	const moviesRender = movies.map((movie, index) => (
		<div className='poster-wrapper' key={index}>
			<a href='/'>
				<img className='posterMovie' src={movie.poster} alt={movie.title} />
			</a>
		</div>
	));

	return (
		<div className='card-container'>
			<h1>Genre Movie</h1>
			<div className='slider'>{moviesRender}</div>
		</div>
	);
};

export default Card;
