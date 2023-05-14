import {
	CButton,
	CCol,
	CForm,
	CFormInput,
	CFormLabel,
	CFormTextarea,
	CRow,
} from "@coreui/react";
import React from "react";
import "./tambah.css";
import { useNavigate } from "react-router";

const inputStyle = {
	height: "40px",
};

const Tambah = () => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/admin");
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
							<CFormInput style={inputStyle} type='text' id='title' />
						</CCol>
					</CRow>
					<CRow className='mb-3'>
						<CFormLabel htmlFor='produceBy' className='col-sm-2 col-form-label'>
							Produce By
						</CFormLabel>
						<CCol sm={10}>
							<CFormInput style={inputStyle} type='text' id='produceBy' />
						</CCol>
					</CRow>
					<CRow className='mb-3'>
						<CFormLabel htmlFor='genre' className='col-sm-2 col-form-label'>
							Genre
						</CFormLabel>
						<CCol sm={10}>
							<CFormInput style={inputStyle} type='text' id='genre' />
						</CCol>
					</CRow>
					<CRow className='mb-3'>
						<CFormLabel htmlFor='year' className='col-sm-2 col-form-label'>
							Year
						</CFormLabel>
						<CCol sm={10}>
							<CFormInput style={inputStyle} type='date' id='year' />
						</CCol>
					</CRow>
					<CRow className='mb-3'>
						<CFormLabel htmlFor='link' className='col-sm-2 col-form-label'>
							Link
						</CFormLabel>
						<CCol sm={10}>
							<CFormInput style={inputStyle} type='text' id='link' />
						</CCol>
					</CRow>
					<CRow className='mb-3'>
						<CFormLabel htmlFor='description' className='col-sm-2 col-form-label'>
							Description
						</CFormLabel>
						<CCol sm={10}>
							<CFormTextarea
								id='floatingTextarea'
								floatingLabel='Description'></CFormTextarea>
						</CCol>
					</CRow>
					<CButton type='submit'>Simpan</CButton>
				</CForm>
			</div>
		</div>
	);
};

export default Tambah;
