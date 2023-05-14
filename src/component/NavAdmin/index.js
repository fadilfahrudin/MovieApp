import React, { useState } from "react";
import "./navadmin.css";
import { DummyLogo, IcSearch, IcUser } from "../../assets/icon";
import {
	CButton,
	CDropdown,
	CDropdownItem,
	CDropdownMenu,
	CDropdownToggle,
} from "@coreui/react";
import { useNavigate } from "react-router";

const menus = [
	{ name: "Dashboard", link: "/admin" },
	{ name: "Profile", link: "/admin/profile" },
];

const vars = {
	backgroundColor: "#091620",
	border: "none",
};

function NavAdmin() {
	const navigate = useNavigate();
	const handleGoWebBtn = (e) => {
		navigate("/");
	};

	return (
		<nav className='container'>
			<ul>
				<li>
					<a href='/'>
						<img src={DummyLogo} alt='FF Movie' width={50} />
					</a>
				</li>
				{menus.map((menu) => (
					<li key={menu.name}>
						<a href={menu.link}>{menu.name}</a>
					</li>
				))}
				<CButton color='light' onClick={handleGoWebBtn}>
					Go To Web App
				</CButton>
				<li className='right'>
					<CDropdown>
						<CDropdownToggle style={vars}>
							<img src={IcUser} alt='username' width={40} />
						</CDropdownToggle>
						<CDropdownMenu>
							<CDropdownItem href='#'>Logout</CDropdownItem>
						</CDropdownMenu>
					</CDropdown>
				</li>
			</ul>
		</nav>
	);
}

export default NavAdmin;
