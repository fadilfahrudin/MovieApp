import React from "react";
import "./home.css";
import { Card, Carousel } from "../../component";

const Home = () => {
	return (
		<main>
			{/* <Carousel /> */}
			<div className='ratio ratio-16x9'>
				<iframe
					width='560'
					height='315'
					src='https://www.youtube.com/embed/iuk77TjvfmE?controls=0&autoplay=1&mute=1'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; '
					allowFullScreen></iframe>
			</div>
			<Card />
		</main>
	);
};

export default Home;
