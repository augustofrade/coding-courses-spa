import React, {useEffect, useState} from "react";
import CourseContainer from "../components/CourseContainer";
import FeaturedCourse from "../components/FeaturedCourse";
import data from "../data/data.js";

export default function Courses(props) {
	const [featuredCourseData, setFeaturedCourseData] = useState({})

	function getFeaturedCourse() {
		let featured = Math.floor(Math.random() * (Object.values(data).length))
		setFeaturedCourseData(data[featured])
	}

	useEffect(getFeaturedCourse, [])

	return (
		<React.Fragment>
			<h2 className="display-3">Featured Course</h2>
			{featuredCourseData.image &&
				<FeaturedCourse {...featuredCourseData} />
			}
			<h2 className="display-4">Our Courses</h2>
			<div className="row row-cols-1 row-cols-md-2">
				{
					Object.values(data).map(course => <CourseContainer {...course} {...props} key={course.url} />)
				}			
			</div>
		</React.Fragment>
	)
}