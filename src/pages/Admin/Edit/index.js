import {
	CButton,
	CCol,
	CForm,
	CFormInput,
	CFormLabel,
	CFormTextarea,
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
	const [genres, setGenre] = useState([]);
	const [image, setImage] = useState("");
	const [year, setYear] = useState("");
	const [description, setDesctiption] = useState("");

	useEffect(() => {
		getMovieById();
	}, []);

	const getMovieById = async () => {
		const response = await Axios.get(`http://localhost:2001/movies/${id}`);
		setTitle(response.data.title);
		setGenre(response.data.genres);
		setImage(response.data.images);
		setYear(response.data.year);
		setDesctiption(response.data.description);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(imgUrl);
		try {
			await Axios.patch(`http://localhost:2001/movies/${id}`, {
				title,
				genres,
				imgUrl,
				year,
				description,
			});
			navigate("/admin");
		} catch (error) {
			console.log(error);
		}
	};

	const [imgUrl, setImgUrl] = useState();
	const onImageChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			let img = e.target.files[0];
			setImgUrl(URL.createObjectURL(img));
		}
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
								value={genres}
								onChange={(e) => setGenre(e.target.value)}
							/>
						</CCol>
					</CRow>
					<CRow className='mb-3'>
						<CFormLabel htmlFor='image' className='col-sm-2 col-form-label'>
							Image
						</CFormLabel>
						<CCol sm={10}>
							<CFormInput
								style={inputStyle}
								type='file'
								id='image'
								value={image}
								onChange={onImageChange}
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
