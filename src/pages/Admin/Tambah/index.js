import React, { useState } from "react";
import "./tambah.css";
import { useNavigate } from "react-router";
import Axios from "axios";

const Tambah = () => {
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [genre, setGenre] = useState([]);
	const [poster, setPoster] = useState(
		"https://placeholder.pics/svg/200x250/DEDEDE/555555/Poster%20Movie"
	);
	const [posterSaved, setPosterSaved] = useState("");
	const [year, setYear] = useState("");
	const [description, setDesctiption] = useState("");

	const onPosterChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			let getPoster = e.target.files[0];
			setPoster(URL.createObjectURL(getPoster));
			setPosterSaved(getPoster);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let formData = new FormData();
		formData.append("title", title);
		formData.append("genre", genre);
		formData.append("year", year);
		formData.append("description", description);
		formData.append("poster", posterSaved);

		if (formData) {
			Axios.post("http://localhost:5000/api/movie/create", formData)
				.then((res) => {
					// console.log(res);
					navigate("/admin");
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			console.log("isi data dulu");
		}
	};

	return (
		<div className='container'>
			<div className='row bg-light p-3 rounded w-75 mx-auto mt-5'>
				<div className='row d-flex align-items-center'>
					<button
						type='link'
						className='btn btn-outline-dark btn-sm my-3 col-2'
						onClick={() => navigate("/admin")}>
						<span aria-hidden='true'>&laquo;</span> Back
					</button>
					<h1 className='col text-dark'>Add New Movie</h1>
				</div>
				<form className='text-dark shadow-lg p-2 rounded' onSubmit={handleSubmit}>
					<div className='row'>
						<div className='col'>
							<div className='form-floating mb-3'>
								<input
									required
									type='text'
									className='form-control'
									id='title'
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									placeholder='Avengers End Game'
								/>
								<label htmlFor='floatingInput'>Title Movie</label>
							</div>
							<div className='row'>
								<div className='col'>
									<div className='form-floating mb-3'>
										<input
											required
											type='text'
											className='form-control'
											id='genre'
											placeholder='Example: Action, Hero dll'
											value={genre}
											onChange={(e) => setGenre(e.target.value)}
										/>
										<label htmlFor='floatingInput'>Genre</label>
									</div>
								</div>
								<div className='col'>
									<div className='form-floating mb-3 col'>
										<input
											required
											type='number'
											className='form-control'
											id='year'
											placeholder='Example: 2019'
											value={year}
											onChange={(e) => setYear(e.target.value)}
										/>
										<label htmlFor='floatingInput'>Year</label>
									</div>
								</div>
							</div>
							<div className='mb-3'>
								<input
									required
									className='form-control'
									type='file'
									id='formFile'
									style={{ height: "35px" }}
									onChange={onPosterChange}
								/>
							</div>
							<div className='form-floating mb-3'>
								<textarea
									style={{ minHeight: "125px" }}
									className='form-control'
									placeholder='Description here'
									id='description'
									value={description}
									onChange={(e) => setDesctiption(e.target.value)}></textarea>
								<label htmlFor='description'>Description</label>
							</div>
						</div>
						<div className='col'>
							<div className='mx-auto d-flex justify-content-center'>
								<img src={poster} alt='poster' width={200} height={285} />
							</div>
							<button type='submit' className='btn btn-primary w-100 mt-2 '>
								Save
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Tambah;
