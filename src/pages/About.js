import React from "react";
import profilePicture from "../assets/images/webDeveloperProfilePicture.jpeg";
import arrow from "../assets/images/down-arrow.gif";
import ScrollToTop from "../components/ScrollToTop";

export default function About() {
  const handleClick = () => {
    const targetElement = document.getElementById("arrow");

    if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="introContainer">
        <section id="introText">
          <p>Hello, I'm Jocelyn,</p>
          <h2>Full Stack Developer</h2>
          <p>based in Toronto.</p>
        </section>
        <section id="introImage">
          <img src={profilePicture} alt="portrait of a web developer"></img>
        </section>
      </section>
      <img
        src={arrow}
        alt="down arrow gif"
        href="#about"
        onClick={handleClick}
        id="arrow"
      />
      <section id="about">
        <h3>ABOUT</h3>
        <p>
          As a full stack developer, my peculiar journey began with an ambition
          to create my own game. Coming from a fine arts background, my innate
          curiosity, creativity, and passion for visual intrigue has always been
          a driving force in my life. What started as a goal to bring a game to
          life has transformed into a profound love for the world of web
          development.
          <br />
          <br />
          As I delve deeper into this field, I realize it offers a unique blend
          of technical prowess and creative expression that resonates deeply
          with me. Each line of code I write is an opportunity to weave together
          functionality and aesthetics, creating immersive digital experiences.
          <br />
          <br />
          Motivated by my eagerness to learn and grow, I continuously refine my
          skills through various projects and a commitment to self-improvement.
          Web development has become not just a profession, but a fulfilling
          pursuit that I am wholeheartedly dedicated to. My goal is to
          contribute my passion and expertise to building innovative web
          solutions that captivate users and leave a lasting impact.
          <br />
          <br />I am excited to collaborate with like-minded professionals,
          explore new technologies, and embrace the ever-evolving landscape of
          web development. Together, let's push the boundaries of creativity and
          deliver exceptional digital experiences that inspire and engage!
        </p>
      </section>
      <ScrollToTop />
    </>
  );
}
