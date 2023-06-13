import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../../utils/storage";
import Axios from "axios";
import ReactPaginate from "react-paginate";
import "./dashboard.css";

const Dashboard = () => {
	const navigate = useNavigate();
	const [movies, setMovies] = useState([]);
	const [keyWord, setKeyword] = useState("");
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [rows, setRows] = useState(0);
	const [pages, setPages] = useState(0);

	useEffect(() => {
		getMovies();
	}, [keyWord, page]);

	const getMovies = async () => {
		try {
			const response = await Axios.get(
				`http://localhost:5000/api/movies?q=${keyWord}&_page=${page}&_limit=${limit}&_sort=year&_order=desc`
			);
			setMovies(response.data);
			setRows(response.headers["x-total-count"]);
			setPages(Math.ceil(response.headers["x-total-count"] / limit));
			// console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData("user").then((result) => {
			if (!result) {
				navigate("/login");
			}
		});
	});

	const pageChange = ({ selected }) => {
		setPage(selected + 1);
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

	const handleSearch = () => {
		setKeyword(query);
		setPage(1);
	};

	return (
		<div className='dashboard-container'>
			<h1 className='title'>Dashboard</h1>
			<div className='col'>
				<div className=''>
					<div className='tambah-and-search'>
						<button
							className='btn btn-primary '
							type='button'
							onClick={() => navigate("/admin/tambah")}>
							+ Add Movie
						</button>
						<div className='search-admin'>
							<input
								type='search'
								className=''
								placeholder='Find movie title here...'
								value={query}
								onChange={(e) => setQuery(e.target.value)}
							/>
							<button
								className='btn-search-admin'
								type='button'
								onClick={handleSearch}>
								Search
							</button>
						</div>
					</div>

					<table className='table table-striped table-bordered'>
						<thead className='table-dark'>
							<tr>
								<th scope='col'>ID</th>
								<th scope='col'>Title</th>
								<th scope='col'>Production</th>
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
									<td>{movie.production}</td>
									<td>{movie.genre}</td>
									<td>{movie.year}</td>
									<td className='text-truncate' style={{ maxWidth: "200px" }}>
										{movie.description}
									</td>
									<td className='col-2'>
										<button
											className='btn btn-info btn-sm mx-auto ms-4'
											onClick={() => navigate(`/admin/edit/${movie.id}`)}>
											Edit
										</button>
										<button
											className='btn btn-danger btn-sm float-end me-4'
											onClick={() => handleDelete(movie.id)}>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<p>
						Rows: {rows} Page: {rows ? page : 0} of Total Page : {pages}
					</p>
					<nav className='' key={rows} aria-label='pagination'>
						<ReactPaginate
							previousLabel={"< prev"}
							nextLabel={"next >"}
							pageCount={Math.min(10, pages)}
							onPageChange={pageChange}
							containerClassName={"page-paginate-admin"}
							pageLinkClassName={"paginate-link"}
							pageClassName={"paginate-item"}
							previousLinkClassName={"paginate-link"}
							nextLinkClassName={"paginate-link"}
							activeLinkClassName={"active"}
							disabledLinkClassName={"disabled"}
						/>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
