import frontendIcon from "../assets/images/frontendIcon.PNG";
import backendIcon from "../assets/images/backendIcon.PNG";
import resumeIcon from "../assets/images/resumeIcon.PNG";

export default function Resume() {
  return (
    <section id="resumeOverview">
      <h3>AT A GLANCE</h3>
      <section id="proficiencies">
        <section id="frontend" className="proficienciesCategories">
          <img className="icon" src={frontendIcon} alt="frontend icon"></img>
          <div>
            <h5>Frontend Proficiencies</h5>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Responsive design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </section>
        <section id="backend" className="proficienciesCategories">
          <img src={backendIcon} alt="backend icon" className="icon"></img>
          <div>
            <h5>Backend Proficiencies</h5>
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
        </section>
      </section>
      <section id="resume">
        <img src={resumeIcon} alt="resume icon"></img>
        <button>View my Resume</button>
      </section>
    </section>
  );
}
