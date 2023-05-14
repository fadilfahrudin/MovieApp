import React from "react";
import { useNavigate } from "react-router-dom";
import {
	CButton,
	CDropdownDivider,
	CForm,
	CFormInput,
	CFormLabel,
} from "@coreui/react";
import "./login.css";

const inputStyle = {
	height: "40px",
};

const Login = () => {
	const navigate = useNavigate();
	const handleSubmit = function (e) {
		e.preventDefault();
		navigate("/admin");
	};

	return (
		<div className='container-login'>
			<div className='wrapper-login'>
				<CForm className='px-4 py-4' onSubmit={handleSubmit}>
					<div className='mb-3'>
						<CFormLabel htmlFor='exampleDropdownFormEmail1'>Email address</CFormLabel>
						<CFormInput
							type='email'
							id='exampleDropdownFormEmail1'
							placeholder='email@example.com'
							style={inputStyle}
						/>
					</div>
					<div className='mb-3'>
						<CFormLabel htmlFor='exampleDropdownFormPassword1'>Password</CFormLabel>
						<CFormInput
							type='password'
							id='exampleDropdownFormPassword1'
							placeholder='Password'
							style={inputStyle}
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
