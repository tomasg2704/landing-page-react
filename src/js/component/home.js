import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Navbar } from "../component/Navbar";
import { Jumbotron } from "../component/Jumbotron";
import { CardInfo } from "./CardInfo";
import { Footer } from "../component/Footer";

//create your first component
export function Home() {
	return (
		<div className="container">
			<Navbar />
			<Jumbotron />
			<div className="row">
				<div className="col-sm-3">
					<CardInfo />
				</div>
				<div className="col-sm-3">
					<CardInfo />
				</div>
				<div className="col-sm-3">
					<CardInfo />
				</div>
				<div className="col-sm-3">
					<CardInfo />
				</div>
			</div>
			<Footer />
		</div>
	);
}
