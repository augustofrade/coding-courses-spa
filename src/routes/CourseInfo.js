import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data";

export default function CourseInfo({addToCart}) {
	const [ courseData, setCourseData ] = useState({});
	let { course } = useParams()

	useEffect(() => {
		window.scrollTo(0, 0);
		setCourseData(data.filter(c => c.url === course)[0]);
	}, [])


	return (
		<React.Fragment>
			<h2 className="display-2">{courseData.title}</h2>
			<div style={{display: "flex", alignItems: "center", flexFlow: "row wrap", marginBottom: 50, marginTop: 50}}>
				{courseData.image &&
					<img src={require(`../img/courses/${courseData.image}`)} className="image-fluid" alt={courseData.url}
					style={{height: 200, marginRight: 20, borderRadius: 10}} />
				}
				<div style={{display: "inline-block"}}>
					{courseData.price &&
						<p className="h1"><b>$ {courseData.price.toFixed(2)}</b></p>
					}
					<p className="h2"><em>{courseData.duration}</em> filled with high quality lessons</p>
					<p className="h2">{courseData.lessons} lessons</p>
				</div>
			</div>
			<p className="lead" style={{fontSize: 30}}>{courseData.description}</p>
			<button className="btn btn-primary" onClick={(e) => addToCart(course, e)}>Add to cart</button>
		</React.Fragment>
	)
}