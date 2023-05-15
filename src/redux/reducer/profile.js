import { Types } from "../action/actionType";

const initialState = {
	profile: {
		name: "",
		email: "",
		password: "",
	},
	formSubmitted: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.LOGIN:
			console.log("login", action.payload.user);
			return {
				...state,
				profile: action.payload.user,
				formSubmitted: false,
			};
		default:
			return state;
	}
};

export default reducer;
