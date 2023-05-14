import React from "react";
import {
	BannerDummy1,
	BannerDummy2,
	BannerDummy3,
	PosterDummy1,
	PosterDummy2,
	PosterDummy3,
} from "../../assets/img";
import "./card.css";

const movieData = [
	{
		img: `${PosterDummy1}`,
		link: "/",
		des: "deskripsi singkat film",
		title: "Dummy Image",
		producedBy: "Marvel Studio",
		genre: "drama",
		year: 2015,
		published: "2015-03-25",
	},
	{
		img: `${PosterDummy2}`,
		link: "/",
		des: "deskripsi singkat film",
		title: "Dummy Image",
		producedBy: "DC Universe",
		genre: "komedi",
		year: 2016,
		published: "2016-03-25",
	},
	{
		img: `${PosterDummy3}`,
		link: "/",
		des: "deskripsi singkat film",
		title: "Dummy Image",
		producedBy: "Falcon Picture",
		genre: "drama",
		year: 2017,
		published: "2017-03-25",
	},
	{
		img: `${PosterDummy3}`,
		link: "/",
		des: "deskripsi singkat film",
		title: "Dummy Image",
		producedBy: "Falcon Picture",
		genre: "drama",
		year: 2017,
		published: "2017-03-25",
	},
	{
		img: `${PosterDummy3}`,
		link: "/",
		des: "deskripsi singkat film",
		title: "Dummy Image",
		producedBy: "Falcon Picture",
		genre: "drama",
		year: 2017,
		published: "2017-03-25",
	},
	{
		img: `${PosterDummy3}`,
		link: "/",
		des: "deskripsi singkat film",
		title: "Dummy Image",
		producedBy: "Falcon Picture",
		genre: "drama",
		year: 2017,
		published: "2017-03-25",
	},
	{
		img: `${PosterDummy3}`,
		link: "/",
		des: "deskripsi singkat film",
		title: "Dummy Image",
		producedBy: "Falcon Picture",
		genre: "drama",
		year: 2017,
		published: "2017-03-25",
	},
];

const moviesRender = movieData.map((movie) => (
	<div className='poster-wrapper' key={movie.title}>
		<a href='/'>
			<img className='posterMovie' src={movie.img} alt={movie.title} />
		</a>
	</div>
));

const Card = () => {
	return (
		<div className='card-container'>
			<h1>Genre Movie</h1>
			<div className='slider'>{moviesRender}</div>
		</div>
	);
};

export default Card;
