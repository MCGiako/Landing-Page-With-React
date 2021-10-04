import React from "react";
import Card from "./Cards.js";

function CardComponent() {
	return (
		<div className="container my-3">
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
				<div className="col-4 my-3">
					<Card />
				</div>
				<div className="col-4 my-3">
					<Card />
				</div>
				<div className="col-4 my-3">
					<Card />
				</div>
				<div className="col-4 my-3">
					<Card />
				</div>
				<div className="col-4 my-3">
					<Card />
				</div>
				<div className="col-4 my-3">
					<Card />
				</div>
			</div>
		</div>
	);
}
export default CardComponent;
