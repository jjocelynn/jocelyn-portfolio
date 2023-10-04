import frontendIcon from "../assets/images/frontendIcon.PNG";
import backendIcon from "../assets/images/backendIcon.PNG";
import resumeIcon from "../assets/images/resumeIcon.PNG";
import resumePDF from "../assets/JocelynChiu_Resume2023.pdf";

export default function Resume() {
  return (
    <section id="resumeOverview">
      <h3>AT A GLANCE</h3>
      <section id="resume">
        <img src={resumeIcon} alt="resume icon" id="resumeIcon"></img>
        <a href={resumePDF} target="blank">
          View my resumé
        </a>
      </section>
      <section id="proficiencies">
        <section id="frontend" className="proficienciesCategories">
          <h5>Frontend Proficiencies</h5>
          <div class="listBody">
            <img
              src={frontendIcon}
              alt="frontend icon"
              className="resumeIcon"
            ></img>
            <div className="resumeText">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="backend" className="proficienciesCategories">
          <h5>Backend Proficiencies</h5>
          <div class="listBody">
            <img
              src={backendIcon}
              alt="backend icon"
              className="resumeIcon"
            ></img>
            <div className="resumeText">
              <ul>
                <li>API's</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
