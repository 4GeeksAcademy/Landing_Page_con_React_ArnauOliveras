import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Album from "./album.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
				<Navbar />
				<Jumbotron />
				<Album />
				<Footer />
		</div>
	);
};

export default Home;
