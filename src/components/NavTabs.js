import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>
        <a href="#intro" onClick={() => handlePageChange("intro")}>
          JOCELYN CHIU
        </a>
      </h1>
      <nav>
        <ul>
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
