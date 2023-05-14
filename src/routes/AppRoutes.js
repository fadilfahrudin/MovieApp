import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { Footer, Header } from "../component";

const AppRoutes = () => {
	return (
		<div className='MainApp'>
			<Header />
			<div className='wrapper-app'>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default AppRoutes;
