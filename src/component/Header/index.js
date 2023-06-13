import React, { useEffect, useState } from "react";
import "./header.css";
import {
	IcMovieOff,
	IcSearch,
	IcTelevisionOff,
	IcUser,
} from "../../assets/icon";
import { asyncLocalStorage, getData } from "../../utils/storage";
// import axios from "axios";

const Header = () => {
	return (
		<nav className=' navigation-wrappper'>
			<ul className='ul-main-app'>
				<li className='li-main-app'>
					<a href='/'>
						<img src={IcUser} alt='' width={25} />
					</a>
				</li>
				<li className='li-main-app'>
					<a href='/'>
						<img src={IcSearch} alt='' width={25} />
					</a>
				</li>
				<li className='li-main-app'>
					<a href='/'>
						<img src={IcMovieOff} alt='' width={25} />
					</a>
				</li>
				<li className='li-main-app'>
					<a href='/'>
						<img src={IcTelevisionOff} alt='' width={25} />
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
