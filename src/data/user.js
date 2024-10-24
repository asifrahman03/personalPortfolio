const INFO = {
	main: {
		title: "Asif Rahman's Portfolio",
		name: "Asif Rahman",
		email: "asif.rahm4n@gmail.com",
		logo: "../professional-portfolio.png",
	},

	socials: {
		github: "https://github.com/asifrahman03",
		linkedin: "https://linkedin.com/asif-rahman-vt"
	},

	homepage: {
		title: "Hi, my name is Asif Rahman!",
		description:
			"Optimizing mundane tasks is my passion where I can focus on bridging the gap between tech and user. I have expertise in Java, Python, React, and C from my time as a Undergraduate Research Assistant and Project Manager. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "I am a Rising Senior in Computer Science at Virginia Tech",
		description:
			"During my time in college, I have learned Data Structures and Algorithms, Operating Systems, and utilizing Large Language Models. I am eager to learn Machine Learning to implement within future projects focused on human computer interaction. When I am not coding, I am passionate weight-lifter, reader, cook, and fashion artist!",
	},

	projects: [
		{
			title: "InstaPC",
			description:
				"InstaPC is a cutting-edge platform that lets you instantly run multiple virtual PCs in your browser. With support for Windows, macOS, and Linux, you can effortlessly switch between operating systems from a single, user-friendly interface. Our integrated AI chatbot assists with VM configuration, ensuring you can easily set up the perfect environment for any task.",
			logo: process.env.PUBLIC_URL + '/instapc.png',
			linkText: "View Project",
			link: "https://github.com/MovementGH/InstaPC",
		},

		{
			title: "Flashy.ai (Currently making changes)",
			description:
				"AI-Powered flashcard SaaS to allow users to create a flashcard set for any text/file input. Users can access their saved collections and review them whenever.",
			logo: "https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg",
			linkText: "View Project",
			link: "https://github.com/asifrahman03/Flashy.Ai",
		},

		{
			title: "InterWork.ai",
			description:
				"AI Chatbot app designed to help with interview preparation and learn more about different companies interview processes. Gives in-depth explanations and has multi-language support through mentioning of language desired.",
			logo: "https://media.istockphoto.com/id/1413286466/vector/chat-bot-icon-robot-virtual-assistant-bot-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZSG3eqGPDJgIgFUIuVxID64uVUF3eqM3LrrDWtaKses=",
			linkText: "View Project",
			link: "https://interview-prep-ai-nu.vercel.app/",
		},

		{
			title: "InventTrack",
			description:
				"Inventory management app where users can input their inventory with AI integration with recipe generation based on the user's inventory. Additional AI features like photo recognition to be added in the future.",
			logo: "https://t3.ftcdn.net/jpg/05/42/85/04/360_F_542850412_mbdrJttsmcColprJNmMeWgUoNsJLdFJn.jpg",
			linkText: "View Project",
			link: "https://invent-track.vercel.app/",
		},

		{
			title: "Seminar Memory Manager",
			description:
				"Java system for scalable storage/retrieval of variable-length records via dynamic memory pool with buddy allocation and extensible double hashing. Academic implementation showcasing performance. .",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/Aka14/P4MemoryManager",
		},

	],
};

export default INFO;
