import React, { useState } from "react";
import { data } from "../assets/data";
import VideoPlayerModal from "../components/VideoPlayerModal";
import ScrollToTop from "../components/ScrollToTop";
import "../styling/Work.css"

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
      <h3 id="h3Work">WORK</h3>
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
            <p id="keyTechnologies">Key technologies: {item.technologies}</p>
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
      <ScrollToTop />
    </section>
  );
}
