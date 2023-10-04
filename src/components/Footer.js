import gitHubIcon from "../assets/images/github.png";
import linkedInIcon from "../assets/images/linkedin.png";

export default function Footer() {
  return (
    <footer>
      <div className="icons">
        <a href="https://github.com/jjocelynn" target="blank">
          <img
            src={gitHubIcon}
            className="icon"
            alt="clickable icon that takes you to jocelyn's github page"
          />
        </a>
        <a href="http://linkedin.com/in/jocelyn-chiu" target="blank">
          <img
            src={linkedInIcon}
            className="icon"
            alt="clickable icon that brings you to jocelyns linkedIn page"
          />
        </a>
      </div>
      • coded by Jocelyn • last updated Oct 4, 2023 •
    </footer>
  );
}
