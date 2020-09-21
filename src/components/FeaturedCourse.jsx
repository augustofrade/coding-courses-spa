import React from "react";
import { Link } from "react-router-dom";

export default function FeaturedCourse(props) {
	
	return (
		<Link to={"/courses/"+props.url}>
			<div className="card bg-dark text-white" style={{border: "none", marginBottom: 80}}>
			  <img src={require(`../img/courses/${props.image}`)} className="card-img" alt={props.title} />
			  <div className="card-img-overlay"
			  style={{color: "#1e1f26", background: "linear-gradient(to bottom, #007bff 10%, transparent 90%)", textAlign: "right"}}>
			    <h5 className="h1">{props.title}</h5>
			    <p className="card-text lead" style={{width: "40%", marginLeft: "auto"}}>{props.description}</p>
			  </div>
			</div>
		</Link>
	)
}