import React from "react";
import Style from "./ProductImages.css";

const ProductImages = (props) => {
	console.log(props);
	return (
		<>
			<div className="image-left">
				<div className="content-image">
					<img className="image-detailed" src={props.imgMain} alt="" />
				</div>
				<div className="content-image">
					<img className="image-detailed" src={props.img2} alt="" />
				</div>
				<div className="content-image">
					<img className="image-detailed" src={props.img3} alt="" />
				</div>
				<div className="content-image">
					<img className="image-detailed" src={props.img4} alt="" />
				</div>
			</div>
		</>
	);
};

export default ProductImages;
 
