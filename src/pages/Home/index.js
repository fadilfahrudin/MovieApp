import React from "react";
import "./home.css";
import { Card, Footer } from "../../component";
import HeadlineMovie from "../../component/HeadlineMovie";

const Home = () => {
	return (
		<main className='main-wrapper'>
			<HeadlineMovie />
			<div className='main-content'>
				<div className='row'>
					<Card />
				</div>
				<div className='row'>
					<Footer />
				</div>
			</div>
		</main>
	);
};

export default Home;
