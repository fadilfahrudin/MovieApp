import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import "./styles/custom.scss";
import MainRoutes from "./routes/MainRoutes";
import { Provider } from "react-redux";
import Store from "./redux/store.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
const title = document.getElementsByTagName("title")[0];
title.innerHTML = "FF Movie";

root.render(
	<React.StrictMode>
		<Provider store={Store}>
			<BrowserRouter>
				<MainRoutes />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
