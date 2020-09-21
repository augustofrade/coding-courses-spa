import React from "react";
import { Link } from "react-router-dom";
import "./CourseContainer.css";

export default function CourseContainer(props) {
	return (
		<div className="card mb-4">
			<Link to={"/courses/"+props.url}>
				<img src={require(`../img/courses/${props.image}`)} className="card-img-top" alt={props.title} />
			</Link>
			<div className="card-body">
		    	<h5 className="card-title h2">{props.title}</h5>
		    	<p className="card-text">{props.description}</p>
		    	<p className="card-text lead">{props.duration} — {props.lessons} lessons</p>
		    	<h4 className="card-text" style={{fontWeight: 600, color: "#00b159"}}>$ {props.price.toFixed(2)}</h4>
		    	<button className="btn btn-primary btn-lg btn-block"
		    	style={{marginTop: 20}} onClick={(e) => props.addToCart(props.url, e)}>
		    		ADD TO CART
		    	</button>
		  	</div>
		</div>
	)
}