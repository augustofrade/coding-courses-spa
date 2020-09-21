import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";

import data from "../data/data";

export default function Cart({cart, removeFromCart}) {
	const [ cartCourses, setCartCourses ] = useState([])

	function getTotalPricing() {
		let coursePrices = cartCourses.reduce((sum, {price}) => price + sum, 0);
		return coursePrices.toFixed(2)
	}

	useEffect(() => window.scrollTo(0, 0), [])

	useEffect(function() {
		let courses = data.filter(course => cart.includes(course.url))
		setCartCourses([...courses])
	}, [cart])

	return (
		<React.Fragment>
			<h2 className="display-2">Cart</h2>
			{getTotalPricing() > 0
				? <React.Fragment>
					{
						cartCourses.map(course => <CartItem {...course} removeFromCart={removeFromCart} key={course.url} />)
					}
					<div className="text-right h1" style={{marginBottom: 30, marginTop: 100}}>Total: <b>$ {getTotalPricing()}</b></div>
					<button type="button" className="btn btn-success btn-lg btn-block" 
					style={{marginTop: 30}}>Progress to the payment screen</button>
				</React.Fragment>

				: <div className="h1 text-center" style={{marginTop: 100}}>Oops!! You don't have any courses on your cart yet!</div>
			}
		</React.Fragment>
	)
}