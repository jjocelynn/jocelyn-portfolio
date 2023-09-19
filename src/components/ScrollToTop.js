import React, { useState, useEffect } from "react";
import upArrow from "../assets/images/upArrow.png";

export default function ScrollToTop() {
  const [yPosition, setYPosition] = useState(0);

  // Add scroll event listener to the window
  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
  }, []);

  // Function to update the scroll position when scrolling
  const updateScrollPosition = () => {
    setYPosition(window.scrollY);
  };

  // Function to determine whether to show the scroll button
  const showScrollBtn = () => {
    if (yPosition > 500) {
      return "block";
    } else {
      return "none";
    }
  };

  // Function to scroll to the top when the button is clicked
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <img
      src={upArrow}
      id="upArrow"
      alt="up arrow that will scroll to page top"
      onClick={scrollTop}
      style={{ display: showScrollBtn() }}
    />
  );
}
