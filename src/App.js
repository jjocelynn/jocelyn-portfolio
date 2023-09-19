import React, { useState } from "react";
import NavTabs from "../src/components/NavTabs";
import About from "../src/pages/About";
import Work from "../src/pages/Work";
import Contact from "../src/pages/Contact";
import Resume from "../src/pages/Resume";
import Footer from "../src/components/Footer";
import "./App.css";

export default function App() {
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
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <section id="pageBody">{renderPage()}</section>
      <Footer />
    </>
  );
}
