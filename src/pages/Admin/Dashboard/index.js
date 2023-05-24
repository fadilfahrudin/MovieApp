import {
	CButton,
	CTable,
	CTableBody,
	CTableDataCell,
	CTableHead,
	CTableHeaderCell,
	CTableRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { getData } from "../../../utils/storage";
import Axios from "axios";

const Dashboard = () => {
	const navigate = useNavigate();
	useEffect(() => {
		return getMovies();
	}, []);

	const [movies, setMovies] = useState([]);

	const getMovies = () => {
		Axios.get("http://localhost:5000/api/movies?_limit=6").then((result) => {
			setMovies(result.data);
		});
	};

	useEffect(() => {
		getData("user").then((result) => {
			if (!result) {
				navigate("/login");
			}
		});
	});

	const handleCreate = (e) => {
		navigate("/admin/tambah");
	};
	const handleDelete = async (id) => {
		if (window.confirm("Sure want to delete?")) {
			try {
				await Axios.delete(`http://localhost:5000/api/movies/${id}`);
				getMovies();
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div className='dashboard-container'>
			<h1 className='title'>Dashboard</h1>
			<div className='content-wrapper'>
				<CButton color='light' onClick={handleCreate}>
					+ Tambah
				</CButton>
				<CTable striped>
					<CTableHead>
						<CTableRow>
							<CTableHeaderCell scope='col'>No</CTableHeaderCell>
							<CTableHeaderCell scope='col'>Title</CTableHeaderCell>
							<CTableHeaderCell scope='col'>Genre</CTableHeaderCell>
							<CTableHeaderCell scope='col'>Year</CTableHeaderCell>
							<CTableHeaderCell scope='col'>Description</CTableHeaderCell>
							<CTableHeaderCell scope='col'>Action</CTableHeaderCell>
						</CTableRow>
					</CTableHead>
					<CTableBody>
						{movies.map((movie, index) => (
							<CTableRow key={movie.id}>
								<CTableHeaderCell scope='row'>{1 + index}</CTableHeaderCell>
								<CTableDataCell>{movie.title}</CTableDataCell>
								<CTableDataCell>{movie.genre}</CTableDataCell>
								<CTableDataCell>{movie.year}</CTableDataCell>
								<CTableDataCell>{movie.description}</CTableDataCell>
								<CTableDataCell>
									<CButton size='sm' color='info'>
										<Link
											style={{ textDecoration: "none" }}
											to={`/admin/edit/${movie.id}`}>
											Edit
										</Link>
									</CButton>
									<CButton
										size='sm'
										color='danger'
										onClick={() => handleDelete(movie.id)}>
										Delete
									</CButton>
								</CTableDataCell>
							</CTableRow>
						))}
						<CTableRow></CTableRow>
					</CTableBody>
				</CTable>
			</div>
		</div>
	);
};

export default Dashboard;
