import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
	
		formData.append("access_key", "8373e96f-0ea1-4ff7-931a-4f0157a299c0");
	
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);
	
		const res = await fetch("https://api.web3forms.com/submit", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		  },
		  body: json
		}).then((res) => res.json());
	
		if (res.success) {
		  console.log("Success", res);
		  alert("Successfully submitted!");
		}
	  };
 	

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to <span style={{color: '#004AAD'}}>Connect with Me</span> 📱
							<hr />
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to fill out the contact form below or email me directly at
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I make an effort to respond to all messages within
							24 hours, although it may take me longer during busy
							periods. Alternatively, you can use the contact form
							on my website to get in touch. Simply fill out the
							required fields and I'll get back to you as soon as
							possible. Finally, if you prefer to connect on
							social media, you can find me on{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							.
							Thanks again for your interest, and I look forward
							to hearing from you!
						</div>
					</div>

					<div className="contactForm-container">
						<form className="contactForm-left" onSubmit={handleSubmit}>
							<input type="text" name="name" placeholder="Full Name" required className="contactForm-inputs" />
							<br />
							<input type="text" name="email" placeholder="Email" required className="contactForm-inputs"/>
							<br />
							<textarea name="message"  placeholder="Message" required className="contactForm-inputs"/>
							<br />
							<button type="submit">Submit</button>
						</form>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
