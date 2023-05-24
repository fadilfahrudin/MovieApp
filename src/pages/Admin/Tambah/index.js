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
import React, { useState } from "react";
import "./tambah.css";
import { useNavigate } from "react-router";
import Axios from "axios";

const inputStyle = {
	height: "40px",
};

const Tambah = () => {
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [genre, setGenre] = useState([]);
	const [poster, setPoster] = useState(null);
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
					console.log(res);
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
		<div className='container-tambah'>
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
						{poster ? (
							<div style={{ textAlign: "center" }}>
								<CImage src={poster} alt={title} width={150} height={200} style={{}} />
							</div>
						) : (
							""
						)}
						<CFormLabel htmlFor='image' className='col-sm-2 col-form-label'>
							Image
						</CFormLabel>
						<CCol sm={10}>
							<CFormInput
								style={inputStyle}
								type='file'
								id='image'
								onChange={onPosterChange}
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

export default Tambah;
