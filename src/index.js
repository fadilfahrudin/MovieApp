import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import MainRoutes from "./routes/MainRoutes";
import { Provider } from "react-redux";
import Store from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
const title = document.getElementsByTagName("title")[0];
title.innerHTML = "FF Movie";

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={Store}>
				<MainRoutes />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
