import project1 from  "../assets/projects/readme-gen.png"
import project2 from "../assets/projects/arabianSunsets.png";
import project3 from "../assets/samirahMahroof.png";
import project4 from "../assets/projects/marvel.png";
import project5 from "../assets/projects/books&m.png";

export const HERO_CONTENT = `I’m a junior full-stack developer with a strong foundation in HTML, CSS, and JavaScript, along with experience in frameworks and libraries like Bootstrap, React, Node.js, and Express. On the back end, I have experience working with SQL databases to build scalable and efficient applications. I’m passionate about continuous learning and staying up to date with the latest technologies to refine my skills and build better solutions. From crafting sleek, responsive interfaces to optimising back-end performance and database efficiency, I thrive on creating intuitive, user-focused applications that solve real-world problems.`;

export const ABOUT_TEXT = `Technology has always fascinated me - not just how it works, but how it can be used to create something meaningful. That curiosity led me to full-stack development, where I found the perfect balance between creativity and problem-solving. I enjoy the process of building things from the ground up and bringing ideas to life through code.

Along the way, I’ve gained experience with HTML, CSS, JavaScript, React, Node.js, Express, and SQL. In my projects, I focus on more than just functionality, I aim to create smooth, user-friendly experiences, whether that means designing a clean front-end or making the back-end more efficient.

For me, learning never stops. I’m always exploring new tools and techniques to refine my skills and stay ahead in this ever-evolving field. My goal is simple: to keep growing as a developer and build solutions that make a real impact.`;

export const PROJECTS = [
  {
    title: "Readme Generator",
    image: project1,
    description:
      "The README Generator is a Python script that creates a well-structured README.md file based on user input. It utilises interactive command-line prompts and styled terminal output for an enhanced experience.",
    technologies: ["Python", "Markdown", "InquirerPy", "Rich"],
    link: "https://github.com/Samirah-M/read-me-generator.git",
  },
  {
    title: "Arabian Sunsets E-Commerce Website",
    image: project2,
    description:
      "Shopify e-commerce website that offers a seamless shopping experience with a wide range of products, detailed descriptions, secure payment options, and easy navigation.",
    technologies: ["HTML", "CSS", "Liquid"],
    link: "https://arabiansunsets.com",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing about me, projects, and contact information.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://main--samirah-m.netlify.app/",
  },
  {
    title: "Marvel Characters",
    image: project4,
    description:
      "Marvel Character Search is a web application that allows users to explore and search for Marvel characters. This project provides an interactive and visually appealing interface for discovering information about your favorite Marvel heroes and villains.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    link: "https://samirah-m.github.io/Marvel_Characters/"
  },
  {
    title: "Books & Movies Library",
    image: project5,
    description:
      "A user-friendly application that provides a list of movies and books, along with their respective details such as title, release date, etc.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    link: "https://venkatamora.github.io/Book-and-Movies-library/index.html"
  },
];

