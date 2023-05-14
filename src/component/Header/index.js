import React, { useState } from "react";
import "./header.css";
import { DummyLogo, IcSearch, IcUser } from "../../assets/icon";
import {
	CDropdown,
	CDropdownItem,
	CDropdownMenu,
	CDropdownToggle,
} from "@coreui/react";

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
							<CDropdownItem href='/login'>Login</CDropdownItem>
							<CDropdownItem href='#'>Logout</CDropdownItem>
						</CDropdownMenu>
					</CDropdown>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
