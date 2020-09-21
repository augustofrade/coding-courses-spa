import React from "react";

export default function Contact() {
	return (
		<React.Fragment>
			<h2 className="display-4">Contact</h2>
			<p className="lead">Want to work with us or just get rid of some doubts? Check below:</p>
			<ul className="list-group list-group-flush lead">
				<li className="list-group-item">Support e-mail:	support@codingcourses.com</li>
				<li className="list-group-item">Company e-mail: contact@codingcourses.com</li>
				<li className="list-group-item">Telephone: CODE-999</li>
				<li className="list-group-item">Find us in social medias:</li>
			</ul>
			<p className="lead">Do you own a company and want to make a partnership?<br />
			Send-us an e-mail: <b>busines@codingcourses.com</b></p>
		</React.Fragment>
	)
}