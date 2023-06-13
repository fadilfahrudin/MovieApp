import React from "react";
import "./footer.css";
import { IcReact } from "../../assets/img";

const Footer = () => {
	return (
		<div className='container-fluid mx-3'>
			<div className='firstLine'>
				<div className='about'>
					<h5>About</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestias
						nemo similique eius laboriosam..
					</p>
				</div>
				<div className='sosmed'>
					<h5>Social Media</h5>
					<a href='/'>
						<img src={IcReact} alt='Social Media' width={60} />
						<img src={IcReact} alt='Social Media' width={60} />
						<img src={IcReact} alt='Social Media' width={60} />
					</a>
				</div>
			</div>
			<div className='secondLine'>
				<p>© 2022 Created By Fadil Fahrudin</p>
			</div>
		</div>
	);
};

export default Footer;
