import React from "react";

export default function ProfessionalCard(props) {
	
	return (
		<div className="card" style={{width: "18rem"}}>
		  <img src={props.src} className="card-img-top" alt={props.alt} />
		  <div className="card-body">
		  <h3 className="card-title">{props.name}</h3>
		    <p className="card-text">{props.text}.</p>
		  </div>
		</div>
	)
}