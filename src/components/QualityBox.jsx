import React from "react";

export default function QualityBox({text, children}) {
	
	return (
		<div className="card" style={{width: "18rem", textAlign: "center"}}>
			<div className="card-body">
				{children}
			  <p className="card-text" style={{marginTop: 10}}>{text}</p>
			</div>
		</div>
	)
}