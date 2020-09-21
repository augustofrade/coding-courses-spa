import React from "react";
import ProfessionalCard from "../components/ProfessionalCard";

export default function About() {
	
	window.scrollTo(0, 0);
	
	return (

		<React.Fragment>
			<h2 className="display-4">About us</h2>
			<p className="lead" style={{marginBottom: 40}}>The team of <b>Coding Courses</b> is composed by developers working together to ensure
			the platform is working one hundred one percent to make sure our students will get the best of it and become high level professionals.
			Below you can see who we are.
			</p>
			<div className="card-group">
				<ProfessionalCard src={require(`../img/team/leticia-bradbury.jpg`)} alt="Leticia Bradbury"
					name="Leticia Bradbury"
					text="Front-End developer since 2010, has worked on numerous big company projects.." />
				<ProfessionalCard src={require(`../img/team/phillip-poe.jpg`)} alt="Phillip Poe"
					name="Phillip Poe"
					text="Java developer since 1990, Phillip developed several applications recognized by their excellence" />
				<ProfessionalCard src={require(`../img/team/carla-holanda.jpg`)} alt="Carla Holanda"
					name="Carla Holanda"
					text="Teaching PHP lessons since 2014, Carla is the most recognized teacher in the area.&#8196;
					Known by her teaching methods and charisma, always happy to help her students" />
				<ProfessionalCard src={require(`../img/team/davi-xavier.jpg`)} alt="Davi Xavier"
					name="Davi Xavier"
					text="Coding since kid, always found joy in doing so. Participated in many competitions and conferences" />
				

			</div>
		</React.Fragment>
	)
}