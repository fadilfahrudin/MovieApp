import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	CButton,
	CDropdownDivider,
	CForm,
	CFormInput,
	CFormLabel,
} from "@coreui/react";
import "./login.css";
import Axios from "axios";
import { getData, storeData } from "../../utils/storage";

const inputStyle = {
	height: "40px",
};

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		getData("user").then((result) => {
			if (result) {
				return navigate("/admin");
			}
		});
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const getUserSubmit = { email, password };

		Axios.get("http://localhost:5000/api/users", getUserSubmit)
			.then((result) => {
				console.log(result);
				const database = result.data;
				const userData = database.find(
					(user) => user.email === getUserSubmit.email
				);

				if (userData) {
					if (userData.password !== getUserSubmit.password) {
						alert("Password Salah");
					} else {
						storeData("user", userData);
						navigate("/admin");
					}
				} else {
					alert("email salah");
				}
			})
			.catch((err) => {
				console.log("message", err);
			});
	};

	return (
		<div className='container-login'>
			<div className='wrapper-login'>
				<CForm className='px-4 py-4' onSubmit={handleSubmit}>
					<div className='mb-3'>
						<CFormLabel htmlFor='exampleDropdownFormEmail1'>Email address</CFormLabel>
						<CFormInput
							name='email'
							type='email'
							id='exampleDropdownFormEmail1'
							placeholder='email@example.com'
							style={inputStyle}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className='mb-3'>
						<CFormLabel htmlFor='exampleDropdownFormPassword1'>Password</CFormLabel>
						<CFormInput
							name='password'
							type='password'
							id='exampleDropdownFormPassword1'
							placeholder='Password'
							style={inputStyle}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<CButton type='submit'>Sign in</CButton>
				</CForm>
				<CDropdownDivider />
			</div>
		</div>
	);
};

export default Login;
