import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../utils/storage";
import { useDispatch } from "react-redux";
import { SignInAction } from "../../redux/action/user";

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

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const dataUser = { email, password };
		dispatch(SignInAction(dataUser, navigate));
	};

	return (
		<div className='container pt-5'>
			<div className='row bg-light p-3 shadow-lg rounded w-50 mx-auto mt-5'>
				<div className='col'>
					<form className='text-dark  rounded' onSubmit={handleSubmit}>
						<div className='form-floating mb-3'>
							<input
								required
								type='text'
								className='form-control bg-light'
								id='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<label htmlFor='floatingInput'>Email</label>
						</div>

						<div className='form-floating mb-3'>
							<input
								required
								type='password'
								className='form-control bg-light'
								id='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<label htmlFor='exampleDropdownFormPassword1'>Password</label>
						</div>
						<button className='btn btn-primary col w-100' type='submit'>
							Sign in
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
