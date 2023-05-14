import {
	CButton,
	CTable,
	CTableBody,
	CTableDataCell,
	CTableHead,
	CTableHeaderCell,
	CTableRow,
} from "@coreui/react";
import React, { useState } from "react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

const columns = [
	{
		key: "id",
		label: "No",
		_props: { scope: "col" },
	},
	{
		key: "Title",
		_props: { scope: "col" },
	},
	{
		key: "",
		label: "Heading",
		_props: { scope: "col" },
	},
	{
		key: "heading_2",
		label: "Heading",
		_props: { scope: "col" },
	},
];
const items = [
	{
		id: 1,
		class: "Mark",
		heading_1: "Otto",
		heading_2: "@mdo",
		_cellProps: { id: { scope: "row" } },
	},
	{
		id: 2,
		class: "Jacob",
		heading_1: "Thornton",
		heading_2: "@fat",
		_cellProps: { id: { scope: "row" } },
	},
	{
		id: 3,
		class: "Larry the Bird",
		heading_2: "@twitter",
		_cellProps: { id: { scope: "row" }, class: { colSpan: 2 } },
	},
];

const Dashboard = () => {
	const navigate = useNavigate();

	const handleCreate = (e) => {
		navigate("/admin/tambah");
	};
	const handleEdit = (e) => {
		navigate("/admin/edit");
	};
	const handleDelete = (e) => {
		e.preventDefault();
		console.log("Delete");
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
							<CTableHeaderCell scope='col'>Produce By</CTableHeaderCell>
							<CTableHeaderCell scope='col'>Genre</CTableHeaderCell>
							<CTableHeaderCell scope='col'>Year</CTableHeaderCell>
							<CTableHeaderCell scope='col'>Action</CTableHeaderCell>
						</CTableRow>
					</CTableHead>
					<CTableBody>
						<CTableRow>
							<CTableHeaderCell scope='row'>1</CTableHeaderCell>
							<CTableDataCell>Avengers End Game</CTableDataCell>
							<CTableDataCell>Marvel Studios</CTableDataCell>
							<CTableDataCell>Action, Adventure, Drama</CTableDataCell>
							<CTableDataCell>2019</CTableDataCell>
							<CTableDataCell>
								<CButton color='info' onClick={handleEdit}>
									Edit
								</CButton>
								<CButton color='danger' onClick={handleDelete}>
									Delete
								</CButton>
							</CTableDataCell>
						</CTableRow>
						<CTableRow></CTableRow>
					</CTableBody>
				</CTable>
			</div>
		</div>
	);
};

export default Dashboard;
