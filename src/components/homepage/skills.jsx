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
								<li><img src="https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/java/java.png" alt="Java logo"></img>Java</li>
								<li><img src="https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/python/python.png" alt="Python logo"></img>Python</li>
								<li><img src="https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.png" alt="JavaScript logo"></img>JavaScript</li>
								<li><img src="https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/c/c.png" alt="C logo"></img>C</li>
								<li><img src="https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/html/html.png" alt="HTML logo"></img>HTML</li>
								<li><img src="https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png" alt="CSS logo"></img>CSS</li>
								<li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React logo"></img>React</li>
								<li><img src="https://static-00.iconduck.com/assets.00/assembly-icon-2048x2048-wspx42mf.png" alt="Assembly logo"></img>Assembly</li>
								<li><img src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png" alt="Git logo"></img>Git</li>
								<li><img src="https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg" alt="Next.js logo"></img>Next.js</li>
							</ul>
						</div>

					</div>
				}>

			</Card>
            
		</div>
	);
};

export default Skills;
