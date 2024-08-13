import React from "react";

//include images into your bundle
import { SecondsCounter } from "./SecondsCounter";

//create your first component
const Home = ({counter}) => {
	return (
		
		<div className="mx-2 bg-dark text-light">
		<div class="d-flex justify-content-center display-1">
			<div className="mx-2"><i className="far fa-clock"></i></div>
			<div className="mx-2">{Math.floor(counter/100000)%10}</div>
			<div className="mx-2">{Math.floor(counter/10000)%10}</div>
			<div className="mx-2">{Math.floor(counter/1000)%10}</div>
			<div className="mx-2">{Math.floor(counter/100)%10}</div>
			<div className="mx-2">{Math.floor(counter/10)%10}</div>
			<div className="mx-2">{Math.floor(counter/1)%10}</div>
		</div>
	</div>
		
	);
};

export default Home;
