import {
	CButton,
	CCol,
	CForm,
	CFormInput,
	CFormLabel,
	CFormTextarea,
	CImage,
	CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import "./edit.css";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import Axios from "axios";

const inputStyle = {
	height: "40px",
};

const Edit = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [genre, setGenre] = useState("");
	const [poster, setPoster] = useState("");
	const [year, setYear] = useState("");
	const [description, setDesctiption] = useState("");
	const [posterSaved, setPosterSaved] = useState();

	const onImageChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			let getPoster = e.target.files[0];
			setPoster(URL.createObjectURL(getPoster));
			setPosterSaved(getPoster);
		}
	};

	useEffect(() => {
		const getMovieById = () => {
			Axios.get(`http://localhost:5000/api/movies/${id}`).then((response) => {
				setTitle(response.data.title);
				setGenre(response.data.genre);
				setPoster(response.data.poster);
				setYear(response.data.year);
				setDesctiption(response.data.description);
			});
		};
		getMovieById();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		// cek user ganti photo atau tdk
		let getPoster = e.target[2].files[0];

		let formData = new FormData();
		formData.append("id", id);
		formData.append("title", title);
		formData.append("genre", genre);
		formData.append("year", year);
		formData.append("description", description);

		if (!getPoster) {
			formData.append("poster", poster);
		} else {
			formData.append("poster", posterSaved);
		}

		Axios.put(`http://localhost:5000/api/movies/update`, formData)
			.then((res) => {
				console.log(res);
				navigate("/admin");
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<div className='container-edit'>
			<h1>Tambah Data</h1>
			<div className='content-wrapper'>
				<CForm onSubmit={handleSubmit}>
					<CRow className='mb-3'>
						<CFormLabel htmlFor='title' className='col-sm-2 col-form-label'>
							Title
						</CFormLabel>
						<CCol sm={10}>
							<CFormInput
								style={inputStyle}
								type='text'
								id='title'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</CCol>
					</CRow>
					<CRow className='mb-3'>
						<CFormLabel htmlFor='genre' className='col-sm-2 col-form-label'>
							Genre
						</CFormLabel>
						<CCol sm={10}>
							<CFormInput
								style={inputStyle}
								type='text'
								id='genre'
								value={genre}
								onChange={(e) => setGenre(e.target.value)}
							/>
						</CCol>
					</CRow>
					<CRow className='mb-3'>
						<div style={{ textAlign: "center" }}>
							<CImage src={poster} alt={title} width={150} height={200} style={{}} />
						</div>
						<CFormLabel htmlFor='image' className='col-sm-2 col-form-label'>
							Image
						</CFormLabel>
						<CCol sm={10}>
							<CFormInput
								style={inputStyle}
								type='file'
								id='image'
								onChange={onImageChange}
								accept='image/*'
							/>
						</CCol>
					</CRow>
					<CRow className='mb-3'>
						<CFormLabel htmlFor='year' className='col-sm-2 col-form-label'>
							Year
						</CFormLabel>
						<CCol sm={10}>
							<CFormInput
								style={inputStyle}
								type='number'
								id='year'
								value={year}
								onChange={(e) => setYear(e.target.value)}
							/>
						</CCol>
					</CRow>
					<CRow className='mb-3'>
						<CFormLabel htmlFor='description' className='col-sm-2 col-form-label'>
							Description
						</CFormLabel>
						<CCol sm={10}>
							<CFormTextarea
								id='floatingTextarea'
								floatingLabel='Description'
								value={description}
								onChange={(e) => setDesctiption(e.target.value)}></CFormTextarea>
						</CCol>
					</CRow>
					<CButton type='submit'>Simpan</CButton>
				</CForm>
			</div>
		</div>
	);
};

export default Edit;
