import React from "react";

//create your first component
const Home = (props) => {
	return (
		<div className="container-fluid">
			<div className="row d-flex">
				
				<div className="col-2 bg-dark">
				<i className="far fa-clock fa-10x" style={{color: "solid white"}}></i>

				</div>

				<div className="col-2 bg-dark p-5"><h1>{props.num4}</h1></div>

				<div className="col-2 bg-dark p-5"><h1>{props.num3}</h1></div>

				<div className="col-2 bg-dark p-5"><h1>{props.num2}</h1></div>

				<div className="col-2 bg-dark p-5"><h1>{props.num1}</h1></div>

			</div>

		</div>
	);
};

export default Home;
