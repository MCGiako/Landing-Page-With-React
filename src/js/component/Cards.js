import React from "react";

const Card = () => {
	return (
		<div className="card text-center" style={{ width: "18rem" }}>
			<img
				src="https://img.discogs.com/5qm_qgRRDk6BKoUmw8S_uFzjm0k=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1885313-1250094305.jpeg.jpg"
				className="card-img-top"
				alt="Landing Page"
			/>
			<div className="card-body">
				<h5 className="card-title" />
				<p className="card-text" />
				<a href="#" className="btn btn-primary">
					Makiza - Aerolíneas (1999)
				</a>
			</div>
		</div>
	);
};
export default Card;
