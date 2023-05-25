import React, { useEffect, useState } from "react";
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
		<div className='container'>
			<h1 className='title'>Dashboard</h1>
			<div className='col'>
				<div className='row'>
					<div>
						<div className='input-group mb-3'>
							<input
								type='text'
								className='form-control'
								placeholder='Find something here...'
								style={{ height: "40px" }}
							/>
							<button className='btn btn-primary' type='submit'>
								Search
							</button>
						</div>
					</div>
					<table className='table table-striped table-bordered'>
						<thead className='table-dark'>
							<tr>
								<th scope='col'>ID</th>
								<th scope='col'>Title</th>
								<th scope='col'>Genre</th>
								<th scope='col'>Year</th>
								<th scope='col'>Description</th>
								<th scope='col'>Action</th>
							</tr>
						</thead>
						<tbody className='table-secondary'>
							{movies.map((movie) => (
								<tr key={movie.id}>
									<td>{movie.id}</td>
									<td>{movie.title}</td>
									<td>{movie.genre}</td>
									<td>{movie.year}</td>
									<td>{movie.description}</td>
									<td>
										<button className='btn btn-info btn-sm'>Edit</button>{" "}
										<button className='btn btn-danger btn-sm'>Delete</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
