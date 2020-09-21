import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import "./Nav.css";

export default function Nav(props) {

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{position: "fixed", top: 0, left: 0, right: 0, zIndex: 999}}>
		  <Link className="navbar-brand" to="/">Coding Courses</Link>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNavDropdown">
		    <ul className="navbar-nav">
		      <li className="nav-item">
		        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to="/courses">Courses</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to="/about">About</Link>
		      </li>
		      <li className="nav-item">
		      	<Link className="nav-link" to="/contact">Contact</Link>
		      </li>
		    </ul>
		    <Link to="/cart" className="cart-icon">
		    <Badge badgeContent={props.cartItems} color="secondary"><ShoppingCartIcon /></Badge><span>Cart</span>
		    </Link>
		  </div>
		</nav>
	)
}