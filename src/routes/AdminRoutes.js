import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Edit, Tambah } from "../pages/Admin";
import { NavAdmin } from "../component";

const CmsRouts = () => {
	return (
		<>
			<NavAdmin />
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/tambah' element={<Tambah />} />
				<Route path='/edit' element={<Edit />} />
			</Routes>
		</>
	);
};

export default CmsRouts;
