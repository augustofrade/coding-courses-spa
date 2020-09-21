import React from "react";
import {Link} from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';

export default function CartItem(props) {
	
	return (
		<div className="card mb-3">
			<DeleteIcon style={{
				position: "absolute",
				top: 0,
				right: 0,
				zIndex: 5,
				transform: "translate(50%, -50%)",
				fontSize: 65,
				backgroundColor: "#fff",
				padding: 15,
				cursor: "pointer"
			}} className="rounded-circle border" onClick={() => props.removeFromCart(props.url)} />
			<Link to={"/courses/"+props.url} style={{textDecoration: "none", color: "inherit"}}>
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src={require(`../img/courses/${props.image}`)} className="card-img" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title h1">{props.title}</h5>
							<p className="h4" style={{fontWeight: 600, color: "#00b159"}}>$ {props.price.toFixed(2)}</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}