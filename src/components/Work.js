// import VideoModal from "../components/VideoModal";
import React, { useState } from "react";
import jdtImg from "../assets/images/JDT-Events.jpg";
import codefolioImg from "../assets/images/codefolio.jpg";
import wikiGoImg from "../assets/images/WikiGO-landing-page.jpg";
import jdtVideo from "../assets/videos/JDT-EventWorks-Demonstration.mp4";
import codefolioVideo from "../assets/videos/Codefolio-Demonstration.mp4";
import Ratio from "react-bootstrap/Ratio";

export default function Work() {
  const data = [
    {
      id: "jdt",
      title: "JDT EventWorks",
      description:
        "Single-page MERN (MongoDB, Express.js, React, Node.js) stack application that allows users to create, manage, and view events effectively and efficiently. The application provides essential event details such as date, time, location, cost, as well as the ability for users to create an account to better manage their events.",
      technologies:
        "React, Apollo Client and GraphQL, Bootstrap, Tailwind CSS, JWT-decode",
      photo: jdtImg,
      link: "https://github.com/ThomasCalle/UTOR-PROJECT-03",
    },
    {
      id: "codefolio",
      title: "Codefolio",
      description: "codefolio description",
      technologies: "codefolio key technologies",
      photo: codefolioImg,
      link: "https://github.com/MannyAulakh/Codefolio",
    },
    {
      id: "wikigo",
      title: "WikiGo",
      description: "wikiGo description",
      technologies: "wikiGo key technologies",
      photo: wikiGoImg,
      link: "https://github.com/jjocelynn/WikiGo",
    },
  ];

  // const text = () => {
  // };

  const [selectedVideoId, setSelectedVideoId] = useState(null);

  function playVideo(id) {
    console.log("Supposed to be the video: ", id);
    setSelectedVideoId(id);
  }

  const openGitHub = (url) => {
    console.log(`open link`);
    window.open(url, "_blank");
  };

  return (
    <div>
      {data.map((item) => (
        <>
          <img
            src={item.photo}
            alt={`${item.title} still`}
            id={``}
            className="workImg"
          />
          <section id={`workText-${item.id}`} key={item.id}>
            <div className="workTitle">
              <h5>{item.title}</h5>
              <hr />
            </div>
            <p>{item.description}</p>
            <p>Key technologies: {item.technologies}</p>
            <div className="workButtons">
              <button onClick={() => playVideo(item.id)}>View Demo</button>
              <button onClick={() => openGitHub(item.link)}>Github Repo</button>
            </div>
          </section>
        </>
      ))}
    </div>
  );
}

/* {selectedVideoId === item.id && (
            <div style={{ width: "1000px", height: "500px" }}>
              <Ratio aspectRatio="16x9">
                <video controls>
                  <source
                    src={
                      item.id === "jdt"
                        ? jdtVideo
                        : item.id === "codefolio"
                        ? codefolioVideo
                        : ""
                    }
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </Ratio>
            </div>
          )} */
