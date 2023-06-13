const initialState = {
	title: "",
	genre: "",
	year: "",
	description: "",
	poster: "",
};

export const addMovie = (state = initialState, action) => {
	if (action.type === "ADD_MOVIE") {
		return {
			...state,
			title: action.value.title,
			genre: action.value.genre,
			year: action.value.year,
			description: action.value.description,
			poster: action.value.poster,
		};
	}
	return state;
};
