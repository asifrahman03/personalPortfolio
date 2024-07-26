import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">Headstarter.ai</div>
							<div className="work-subtitle">
								Software Engineering Fellow
							</div>
							<div className="work-description">
								<ul>
									<li>Building 5+ AI apps and APIs using Next.js, OpenAI, Pinecone, StripeAI with 97% accuracy as seen by 1000 users</li>
									<li>Developing projects from design to deployment leading 4+ engineering fellows using MVC design patterns</li>
									<li>Coached by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git, and microservice patterns</li>
								</ul>
							</div>
							<div className="work-duration">August 2024 - Present</div>
						</div>

						<div className="work">
							<div className="work-title">C2llect</div>
							<div className="work-subtitle">
								Project Manager Intern
							</div>
							<div className="work-description">
								<ul>
									<li>Lead 5 teams of 5-7 Software Engineering interns to develop front-end, back-end, database, and cloud services for
C2llect, aiming to grow user base by 30% in 3 months</li>
									<li>Implemented 2-week team sprints and Agile methodologies to address bugs and reduce development time by 20%</li>
									<li>Developed a comprehensive project management plan, enabling successful completion by late August 2024 and streamlining processes for a 25% reduction in delays</li>
								</ul>
							</div>
							<div className="work-duration">May 2024 - August 2024</div>
						</div>

						<div className="work">
							<div className="work-title">CS Department @ Virginia Tech</div>
							<div className="work-subtitle">
								Undergraduate Research Assistant
							</div>
							<div className="work-description">
								<ul>
									<li>Measured neural network model efficiency utilizing ONNX runtime-optimized model for 10% greater scalability</li>
									<li>Designed increased scalability of neural network models for usage in ARM and RISC-V processors</li>
									<li>Optimized MySQL database queries, reducing page load times by 15% and enhancing application performance</li>
								</ul>
							</div>
							<div className="work-duration">January 2024 - May 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
