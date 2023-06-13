import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { Footer, Header } from "../component";

const AppRoutes = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
};

export default AppRoutes;
