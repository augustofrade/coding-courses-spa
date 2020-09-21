import React from "react";

export default function Footer() {
	return (
		<footer className="container-fluid" style={{
			background: "#eee",
			paddingTop: 25,
			paddingBottom: 25,
			paddingLeft: 50
		}} >
			<p className="h4">Disclaimer</p>
			<p className="lead"><b>Coding Courses</b> is a fictional project made with React JS for practical learning purpouses.</p>
			<p className="lead">More information can be found <a href="https://github.com/augustofrade/coding-courses-spa">here</a></p>
		</footer>
	)
}