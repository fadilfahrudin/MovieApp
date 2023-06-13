import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { addMovie } from "./reducer/moviesReducer";

const store = createStore(addMovie, applyMiddleware(thunk));

export default store;
