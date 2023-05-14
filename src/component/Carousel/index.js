import React from "react";
import { BannerDummy1, BannerDummy2, BannerDummy3 } from "../../assets/img";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "./carousel.css";

const movieData = [
	{
		img: `${BannerDummy1}`,
		link: "/",
		des: "deskripsi singkat film",
		title: "Dummy Image",
		producedBy: "Marvel Studio",
		genre: "drama",
		year: 2015,
		published: "2015-03-25",
	},
	{
		img: `${BannerDummy2}`,
		link: "/",
		des: "deskripsi singkat film",
		title: "Dummy Image",
		producedBy: "DC Universe",
		genre: "komedi",
		year: 2016,
		published: "2016-03-25",
	},
	{
		img: `${BannerDummy3}`,
		link: "/",
		des: "deskripsi singkat film",
		title: "Dummy Image",
		producedBy: "Falcon Picture",
		genre: "drama",
		year: 2017,
		published: "2017-03-25",
	},
];

const Carousel = () => {
	return (
		<div className='containerCarousel'>
			<CCarousel className='wrapper' controls indicators>
				{movieData.map((movie) => (
					<CCarouselItem key={movie.title}>
						<CImage className='slider-image' src={movie.img} alt={movie.title} />
					</CCarouselItem>
				))}
			</CCarousel>
		</div>
	);
};

export default Carousel;
