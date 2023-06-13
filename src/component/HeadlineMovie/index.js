import React, { useEffect, useRef, useState } from "react";
import "./headlineMovie.css";
import Axios from "axios";
import { IcLeftArrow, IcRightArrow } from "../../assets/icon";

const HeadlineMovie = () => {
	const ref = useRef(null);

	// set scroll event card thumbniles
	const scrollX = (scrollOffset) => {
		ref.current.scrollLeft += scrollOffset;
		if (scrollOffset === 225) {
			document.getElementById("right-arrow").style.display = "none";
			document.getElementById("left-arrow").style.display = "block";
			document.getElementById("btn-gradient-r").style.display = "none";
			document.getElementById("btn-gradient-l").style.display = "block";
		} else if (scrollOffset === -225) {
			document.getElementById("left-arrow").style.display = "none";
			document.getElementById("right-arrow").style.display = "block";
			document.getElementById("btn-gradient-r").style.display = "block";
			document.getElementById("btn-gradient-l").style.display = "none";
		}
	};

	const [movies, setMovies] = useState([]);
	const [urlTrailer, setUrlTrailer] = useState();
	const [title, setTitle] = useState();
	const [year, setYear] = useState();
	const [genre, setGenre] = useState();
	const [desc, setDesc] = useState();
	const [movieId, setMovieId] = useState();
	useEffect(() => {
		getMovies();
	}, []);

	// call api
	const getMovies = async () => {
		Axios.get("http://localhost:5000/api/movies?_sort=year&_order=desc&_limit=6")
			.then((res) => {
				setMovies(res.data);
				setUrlTrailer(res.data[0].trailer);
				setMovieId(res.data[0].id);
				setTitle(res.data[0].title);
				setYear(res.data[0].year);
				setGenre(res.data[0].genre);
				setDesc(res.data[0].description);
			})
			.catch((err) => console.log("msg error", err));
	};

	// set event after clicking thumbnail
	const showMovie = (i, movie) => {
		const attr = document.querySelectorAll(".thumb");

		attr.forEach(function (active) {
			active.classList.remove("active");
			attr[i].classList.add("active");
		});

		setUrlTrailer(movie.trailer);
		setMovieId(movie.id);
		setYear(movie.year);
		setTitle(movie.title);
	};

	return (
		<div className='wrapper-headline-movies'>
			<a href={`/detail/${movieId}`}>
				<div className='movie-show-data'>
					<div className='title-img'>{title}</div>
					<div className='body-banner-movie'>
						<p>
							{year} | {genre}
						</p>
					</div>
					<a href={`/detail/${movieId}`} className='watch-now'>
						Watch Now
					</a>
				</div>
			</a>

			<div className='card-headline'>
				<div id='btn-gradient-r' className='gradient-thumb-section-right'></div>
				<div
					style={{ display: "none" }}
					id='btn-gradient-l'
					className='gradient-thumb-section-left'></div>
				<div className='data-card-headline' ref={ref}>
					{movies.map((movie, i) => (
						<div
							id='thumb'
							className={`thumb ${i === 0 ? "active" : ""}`}
							key={i}
							onClick={() => showMovie(i, movie)}>
							<img src={movie.poster} alt={movie.title} width={"100%"} />
						</div>
					))}
				</div>

				<button
					id='right-arrow'
					className='right-arrow'
					onClick={() => scrollX(225)}>
					<img src={IcRightArrow} alt='' />
				</button>
				<button
					style={{ display: "none" }}
					id='left-arrow'
					className='left-arrow'
					onClick={() => scrollX(-225)}>
					<img src={IcLeftArrow} alt='' />
				</button>
			</div>

			<a href={`/detail/${movieId}`}>
				<div className='gradient-banner'></div>
				<div className='gradient-banner2'></div>
				<div className='banner-movies'>
					<iframe
						className='show-iframe'
						width='1790'
						height='880'
						src={`https://www.youtube.com/embed?playlist=${urlTrailer}&controls=0&autoplay=1&mute=1&start=0&loop=1&`}
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; '
						allowFullScreen></iframe>
				</div>
			</a>
		</div>
	);
};

export default HeadlineMovie;
