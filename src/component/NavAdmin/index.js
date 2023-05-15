import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { asyncLocalStorage } from "../../utils/storage";

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
		navigate("/", e);
	};

	const handleLogOut = (e) => {
		e.preventDefault();
		asyncLocalStorage.removeItem("user").then(() => {
			navigate("/login");
		});
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
							<CDropdownItem href='#' onClick={(e) => handleLogOut(e)}>
								Logout
							</CDropdownItem>
						</CDropdownMenu>
					</CDropdown>
				</li>
			</ul>
		</nav>
	);
}

export default NavAdmin;
