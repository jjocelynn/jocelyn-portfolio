import { React, useRef, useEffect } from "react";
import menu from "../assets/images/icons/menu.png";
import "../styling/NavTabs.css"

function NavTabs({ currentPage, handlePageChange }) {
  const ul = useRef();

  //onClick, nav menu will expand or close
  function expandNav() {
    if (ul.current.style.display === "flex") {
      ul.current.style.display = "none";
    } else {
      ul.current.style.display = "flex";
    }
  }

  //when the page width is above 768px, the menu will be displayed in a row. when it is less, hide he menu
  const handleResize = () => {
    if (window.innerWidth > 970) {
      ul.current.style.display = "flex";
      ul.current.style.flexDirection = "row";
    } else {
      ul.current.style.display = "none";
      ul.current.style.flexDirection = "column";
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <header>
      <h1>
        <a href="#intro" onClick={() => handlePageChange("intro")}>
          JOCELYN CHIU
        </a>
      </h1>
      <div id="menuDiv">
        <img
          src={menu}
          id="menuIcon"
          alt="collapsible menu icon"
          onClick={expandNav}
        />
      </div>
      <nav>
        <ul ref={ul}>
          <li>
            <a
              href="#about" //link to "about" page when clicked
              onClick={() => handlePageChange("about")} //onClick(event handler), ()=> arrow function, changes to "about" page
              className={
                currentPage === "about" ? "nav-link active" : "nav-link"
              } //for css (highlight whick tab you are currently on)
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#work"
              onClick={() => handlePageChange("work")}
              className={
                currentPage === "work" ? "nav-link active" : "nav-link"
              }
            >
              WORK
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handlePageChange("contact")}
              className={
                currentPage === "contact" ? "nav-link active" : "nav-link"
              }
            >
              CONTACT
            </a>
          </li>
          <li>
            <a
              href="#resumeOverview"
              onClick={() => handlePageChange("resume")}
              className={
                currentPage === "resume" ? "nav-link active" : "nav-link"
              }
            >
              RESUMÉ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavTabs;
