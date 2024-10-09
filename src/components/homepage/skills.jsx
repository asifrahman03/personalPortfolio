import React from "react";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/skills.css";

const Skills = () => {
	return (
		<div className="skills">
			<Card
				icon={faUserGear}
				title="Skills"
				body={
					<div className="skills-body">
						<div className="skill">
							<ul style={{listStyle: "none"}}>
								<li><img src="https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/java/java.png" alt="Java logo Asif Rahman"></img>Java</li>
								<li><img src="https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/python/python.png" alt="Python logo Asif Rahman"></img>Python</li>
								<li><img src="https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.png" alt="JavaScript logo Asif Rahman"></img>JavaScript</li>
								<li><img src="https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/c/c.png" alt="C logo Asif Rahman"></img>C</li>
								<li><img src="https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/html/html.png" alt="HTML logo Asif Rahman"></img>HTML</li>
								<li><img src="https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png" alt="CSS logo Asif Rahman"></img>CSS</li>
								<li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React logo Asif Rahman"></img>React</li>
								<li><img src="https://static-00.iconduck.com/assets.00/assembly-icon-2048x2048-wspx42mf.png" alt="Assembly logo Asif Rahman"></img>Assembly</li>
								<li><img src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png" alt="Git logo Asif Rahman"></img>Git</li>
								<li><img src="https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg" alt="Next.js logo Asif Rahman"></img>Next.js</li>
								<li><img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="Node.js logo Asif Rahman"></img>Node.js</li>
								<li><img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" alt="Express.js logo Asif Rahman"></img>Express.js</li>
								<li><img src={process.env.PUBLIC_URL + '/api.png'} alt="RESTful API logo Asif Rahman"></img>RESTful APIs</li>
								<li><img src="https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png" alt="MongoDB logo Asif Rahman"></img>MongoDB</li>
								<li><img src="https://w7.pngwing.com/pngs/562/910/png-transparent-firebase-angularjs-serverless-computing-node-js-others-angle-rectangle-orange-thumbnail.png" alt="MongoDB logo Asif Rahman"></img>Firebase</li>
								<li><img src={process.env.PUBLIC_URL + '/langchain.png'} alt="LangChain logo Asif Rahman"></img>LangChain</li>
								<li><img src="https://www.svgrepo.com/show/373541/cuda.svg" alt="Nvidia CUDA logo Asif Rahman"></img>CUDA</li>
							</ul>
						</div>

					</div>
				}>

			</Card>
            
		</div>
	);
};

export default Skills;