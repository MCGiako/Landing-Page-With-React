import React from "react";
import Navbar from "./Navbar.js";
import Jumbotron from "./Jumbotron.js";
import CardComponent from "./Cards2.js";
import Footer from "./Footer.js";

export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<CardComponent />
			<Footer />
		</div>
	);
}
