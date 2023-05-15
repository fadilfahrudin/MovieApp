import React, { useEffect, useState } from "react";
import "./header.css";
import { DummyLogo, IcSearch, IcUser } from "../../assets/icon";
import {
	CDropdown,
	CDropdownItem,
	CDropdownMenu,
	CDropdownToggle,
} from "@coreui/react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import { asyncLocalStorage, getData } from "../../utils/storage";
import { useNavigate } from "react-router-dom";

const menus = [
	{ name: "Home", link: "/" },
	{ name: "Drama", link: "drama" },
	{ name: "Movie", link: "movie" },
];

const vars = {
	backgroundColor: "#091620",
	border: "none",
};

function Header() {
	const user = useSelector(selectUser);
	const navigate = useNavigate();
	const [loggIn, setloggIn] = useState(false);

	const getUser = () => {
		getData("user").then((result) => {
			if (result) {
				setloggIn(true);
			}
		});
	};
	useEffect(() => {
		getUser();
	});

	const handleLogOut = (e) => {
		e.preventDefault();
		asyncLocalStorage.removeItem("user").then(() => {
			getUser();
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
				<li className='search'>
					<input type='text' placeholder='find your best movie' />
					<img src={IcSearch} alt='find' width={20} />
				</li>
				<li className='right'>
					<CDropdown>
						<CDropdownToggle style={vars}>
							<img src={IcUser} alt='username' width={40} />
						</CDropdownToggle>
						<CDropdownMenu>
							{loggIn ? (
								<CDropdownItem onClick={(e) => handleLogOut(e)}>Logout</CDropdownItem>
							) : (
								<CDropdownItem href='/login'>Login</CDropdownItem>
							)}
						</CDropdownMenu>
					</CDropdown>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
