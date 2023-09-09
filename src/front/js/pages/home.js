import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center text-light mt-5">
			<h1>Authenticate</h1>
			<p className="mt-5 mb-2">Click on the button sign up first! If you are already registered, click on the login button </p>
			<div>
				<Link to="/signup">
					<button className="btn btn-primary mb-5">Sign Up</button>
				</Link>
			</div>
		</div>
	);
};