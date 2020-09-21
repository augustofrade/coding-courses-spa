import React from "react";
import {Link} from "react-router-dom";

export default function CourseCard(props) {
	
	return (
		<div className="card" style={{width: "18rem"}}>
		  <img src={require(`../img/courses/${props.image}`)} className="card-img-top" alt={props.title} />
		  <div className="card-body">
		    <h3 className="card-title">{props.title}</h3>
		    <h4 className="card-title" style={{fontWeight: 600, color: "#00b159"}}>$ {props.price.toFixed(2)}</h4>
		    <p className="card-text">{props.description}</p>
		    <Link className="btn btn-outline-primary" to={"/courses/"+props.url}>View Course</Link>
		  </div>
		  <div className="card-footer">
		        <span className="text-muted">{props.duration} — {props.lessons} lessons</span>
		  </div>
		</div>
	)
}