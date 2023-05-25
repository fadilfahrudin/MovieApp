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
import axios from "axios";

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
	// const user = useSelector(selectUser);
	// const navigate = useNavigate();
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

	const handleSearch = () => {
		let searchData = document.querySelector("#search-input").value;

		axios
			.get(`http://localhost:5000/api/movies`)
			.then((res) => {
				// console.log(res.data);
				let dataMovies = res.data;
				const result = dataMovies.find(() => searchData);
				console.log(result);
			})
			.catch((err) => {
				console.log(err);
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
					<input type='text' placeholder='find your best movie' id='search-input' />
					<img src={IcSearch} alt='find' width={20} onClick={handleSearch} />
				</li>
				<li className='right'>
					<CDropdown direction='center'>
						<CDropdownToggle style={vars}>
							<img src={IcUser} alt='username' width={40} />
						</CDropdownToggle>
						{loggIn ? (
							<CDropdownMenu>
								<CDropdownItem href='/admin'>Dashboard</CDropdownItem>
								<CDropdownItem onClick={(e) => handleLogOut(e)}>Logout</CDropdownItem>
							</CDropdownMenu>
						) : (
							<CDropdownMenu className=''>
								<CDropdownItem href='/login'>Login</CDropdownItem>
							</CDropdownMenu>
						)}
					</CDropdown>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
