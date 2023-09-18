import React, { useState } from "react";
import jdtImg from "../assets/images/JDT-Events.jpg";
import codefolioImg from "../assets/images/codefolio.jpg";
import wikiGoImg from "../assets/images/WikiGO-landing-page.jpg";
import jdtVideo from "../assets/videos/JDT-Demo-Compressed.mp4";
import codefolioVideo from "../assets/videos/Codefolio-Demo-Compressed.mp4";
import VideoPlayerModal from "./VideoPlayerModal";

const data = [
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
      "Handlebars, BoosStrap, Nodemailer, Mysql, Sequelize, Bcrypt, Dotenv, Express.",
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

//useState: React hook. used to manage state within functional components. store and manage data that may change over time and affect your component's rendering.
export default function Work() {
  // Video Modal
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setContent] = useState();

  function onViewDemo(demoItem) {
    // Either video or demo
    if (demoItem.video == null) {
      //if there is no key value called video, direct them to the demo link
      window.open(demoItem.demoLink, "_blank");
    } else {
      //otherwise, if the video key is found, set setShowModel to be true and let it know what video to play
      setShowModal(true);
      setContent(demoItem.video);
    }
  }

  //open github repo on another page
  const openRepo = (url) => {
    console.log(`open ${url}`);
    window.open(url, "_blank");
  };

  return (
    <section>
      <VideoPlayerModal
        visible={showModal}
        setVisible={setShowModal}
        content={modalContent}
      />
      <h3>WORK</h3>
      {data.map((item, index) => (
        <div className="projects">
          {/* if index is an even number, display the image before the text section */}
          {index % 2 === 0 && (
            <div className="imgContainer">
              <img
                src={item.photo}
                alt={`${item.title} still`}
                className="workImg"
                onClick={() => onViewDemo(item)}
              />
            </div>
          )}

          <section className="workText">
            <div className="workTitle">
              <h5>{item.title}</h5>
              <hr />
            </div>
            <p>{item.description}</p>
            <p>Key technologies: {item.technologies}</p>
            <div className="workButtons">
              <button onClick={() => onViewDemo(item)}>View Demo</button>
              <button onClick={() => openRepo(item.repoLink)}>
                Github Repo
              </button>
            </div>
          </section>
          {/* if index is an odd number, display the image before the text section */}
          {index % 2 !== 0 && (
            <div className="imgContainer">
              <img
                src={item.photo}
                alt={`${item.title} still`}
                className="workImg"
                onClick={() => onViewDemo(item)}
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
