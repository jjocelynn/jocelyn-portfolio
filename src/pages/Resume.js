import resumeIcon from "../assets/images/icons/resumeIcon.PNG";
import resumePDF from "../assets/JocelynChiu_Resume2023.pdf";
import api from "../assets/images/icons/resume/api.png";
import bootstrap from "../assets/images/icons/resume/bootstrap.png";
import css from "../assets/images/icons/resume/css.png";
import expressJs from "../assets/images/icons/resume/ExpressJS.png";
import graphQl from "../assets/images/icons/resume/graphQl.png";
import html from "../assets/images/icons/resume/html.png";
import javaScript from "../assets/images/icons/resume/javaScript.png";
import mongo from "../assets/images/icons/resume/mongo.png";
import mySql from "../assets/images/icons/resume/mySql.png";
import node from "../assets/images/icons/resume/node.png";
import react from "../assets/images/icons/resume/react.png";
import responsiveDesign from "../assets/images/icons/resume/responsiveDesign.png";
import "../styling/Resume.css";

export default function Resume() {
  const frontendData = [
    { icon: html, text: "HTML" },
    { icon: css, text: "CSS" },
    { icon: javaScript, text: "JavaScript" },
    { icon: bootstrap, text: "Bootstrap" },
    { icon: react, text: "React" },
    { icon: responsiveDesign, text: "Responsive Design" },
  ];

  const backendData = [
    { icon: api, text: "APIs" },
    { icon: node, text: "Node.js" },
    { icon: expressJs, text: "ExpressJS" },
    { icon: mySql, text: "MySQL" },
    { icon: graphQl, text: "GraphQL" },
    { icon: mongo, text: "MongoDB" },
  ];
  
  return (
    <section id="resumeBody">
      <h3>RESUME</h3>
      <section id="resumeLink">
        <img src={resumeIcon} alt="resume icon" id="resumeIcon"></img>
        <a href={resumePDF} target="blank">
          View my resumé
        </a>
      </section>
      <h3>AT A GLANCE</h3>

      <section id="proficiencies">

        <section id="frontend" className="proficienciesCategories">
          <h5>Frontend Proficiencies</h5>
          <div className="iconList">
            {frontendData.map((item, index) => (
              <div key={index} className="iconItem">
                <img src={item.icon} alt={item.text} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="backend" className="proficienciesCategories">
          <h5>Backend Proficiencies</h5>
          <div className="iconList">
            {backendData.map((item, index) => (
              <div key={index} className="iconItem">
                <img src={item.icon} alt={item.text} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

      </section>
    </section>
  );
}
