import React from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import AdminRoutes from "./AdminRoutes";
import { Dashboard, Login } from "../pages";

const MainRoutes = () => {
	return (
		<div className='MainApp' style={{ backgroundColor: "#091620" }}>
			<Routes>
				<Route path='*' element={<AppRoutes />} />
				<Route path='/login' element={<Login />} />
				<Route path='/admin/*' element={<AdminRoutes />} />
			</Routes>
		</div>
	);
};

export default MainRoutes;
