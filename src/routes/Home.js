import React from "react";
import { Link } from "react-router-dom";
import HomeCourseCard from "../components/HomeCourseCard";
import QualityCrate from "../components/QualityCrate";
import BannerContainer from "../components/BannerContainer";

export default function Home(props) {
	return (
		<React.Fragment>
			<img src={require("../img/misc/banner-1.png")} alt="Home intro" className="img-fluid" />

			<QualityCrate />
			<BannerContainer src={require("../img/misc/banner-2.png")} verticalAlign="bottom" textAlign="right"
			top="Learn code with no hassle." bottom="Anytime, the way you want" />

			<h2 style={{marginTop: "10%", marginBottom: 30}}>Top Courses</h2>
			<div className="card-deck">
				{
					Object.values(props).slice(0, 3).map(course => <HomeCourseCard {...course} key={course.url} />)
				}

			<BannerContainer src={require("../img/misc/banner-3.png")} verticalAlign="top" marginTop={100}  textAlign="right"
			top="Recognized professionals." bottom="Lose all your doubts while learning" />
			<BannerContainer src={require("../img/misc/banner-4.png")} verticalAlign="top"
			top="Get help and cooperate" bottom="with other students" />
			<p className="lead">Want to see more? Check our <Link to="/courses" onClick={() => window.scrollTo(0, 0)}>courses</Link></p>
			</div>
		</React.Fragment>
	)
}