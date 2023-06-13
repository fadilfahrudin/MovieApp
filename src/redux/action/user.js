import axios from "axios";
import { storeData } from "../../utils/storage";

export const SignInAction = (data, navigate) => (dispatch) => {
	console.log(data);
	axios
		.get("http://localhost:5000/api/users", data)
		.then((result) => {
			console.log(result);
			const database = result.data;
			const userData = database.find((user) => user.email === data.email);

			if (userData) {
				if (userData.password !== data.password) {
					alert("Password salah");
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
