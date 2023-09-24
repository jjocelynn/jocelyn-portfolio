import jdtImg from "../assets/images/JDT-Events.jpg";
import codefolioImg from "../assets/images/codefolio.jpg";
import wikiGoImg from "../assets/images/WikiGO-landing-page.jpg";
import jdtVideo from "../assets/videos/JDT-Demo-Compressed.mp4";
import codefolioVideo from "../assets/videos/Codefolio-Demo-Compressed.mp4";

export const data = [
  {
    id: "jdt",
    title: "JDT EventWorks",
    description:
      "Single-page MERN (MongoDB, Express.js, React, Node.js) stack application that allows users to create, manage, and view events effectively and efficiently. The application provides essential event details such as date, time, location, cost, as well as the ability for users to create an account to better manage their events.",
    technologies:
      "React, Apollo Client and GraphQL, Bootstrap, Tailwind CSS, JWT-decode.",
    photo: jdtImg,
    video: jdtVideo,
    repoLink: "https://github.com/ThomasCalle/UTOR-PROJECT-03",
  },
  {
    id: "codefolio",
    title: "Codefolio",
    description:
      "Codefolio is a platform for tech enthusiasts, developers, and programmers to share their projects, skills, and experiences. Connect with like-minded individuals, explore user-generated blogs, react to images, and participate in discussions.",
    technologies:
      "Handlebars, Bootstrap, Nodemailer, MySQL, Sequelize, Bcrypt, Dotenv, Express.",
    photo: codefolioImg,
    video: codefolioVideo,
    repoLink: "https://github.com/MannyAulakh/Codefolio",
  },
  {
    id: "wikigo",
    title: "WikiGo",
    description:
      "WikiGO is a JavaScript based web application that combines MediaWiki and Mapbox API's. Together, a travel website is created that provides users with relevant information based on the city that is searched. WikiGO offers curious users a way to learn more about the history of a destination whilst being able to see exactly where it is on an interactive map below.",
    technologies:
      "JavaScript, jQuery HTML, CSS, Materialize, MapBox, MediaWiki.",
    photo: wikiGoImg,
    demoLink: "https://jjocelynn.github.io/WikiGo/",
    repoLink: "https://github.com/jjocelynn/WikiGo",
  },
  {
    id: "test",
    title: "Tester link",
    description: "test description",
    technologies: "test key technologies",
    photo: wikiGoImg,
    demoLink: "https://nopage.com/",
    repoLink: "https://github.com/jjocelynn/WikiGo",
  },
];
