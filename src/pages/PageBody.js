import React, { useState } from "react";
import NavTabs from "../components/NavTabs";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import Footer from "../components/Footer";

export default function PageBody() {
  const [currentPage, setCurrentPage] = useState("intro");

  const renderPage = () => {
    if (currentPage === "intro") {
      return <About />;
    }
    if (currentPage === "about") {
      return <About />;
    }
    if (currentPage === "work") {
      return <Work />;
    }
    if (currentPage === "contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <NavTabs
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></NavTabs>
      <section id="pageBody">{renderPage()}</section>
      <Footer></Footer>
    </>
  );
}
