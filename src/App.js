import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from "./components/ProjectCard";
import AboutMe from "./components/AboutMe";
import SkillCard from "./components/SkillCard";
import ContactForm from "./components/ContactForm";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: "#ffffff",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "#F94892",
        }}
      />
      <div>
        <Navbar />
        <HomeBanner id="home" />
        <AboutMe id="about" />
        <SkillCard id="skills" />

        <ProjectCard
          projectTitle="Learning Out Loud - Coding Club Website"
          projectDesc="This is a React based Website created for the LOL CODING CLUB at
WIT Solapur, serving as a comprehensive online hub for the club's
activities and information."
          projectLink="https://github.com/vivekgogi/LOL-CODING-CLUB"
          deployedProjectLink="https://lolclubwit.web.app/"
          projectImg={require("./images/Project-LOL.png")}
        />

        <ProjectCard
          className="odd"
          projectTitle="My Portfolio Website"
          projectDesc="This React based portfolio website is a dynamic showcase of my projects, skills, and background, featuring an interactive and visually engaging interface with polished, user-friendly experience and with smooth animations and immersive design elements."
          projectLink="https://github.com/vivekgogi/Vivek-Portfolio-Website"
          deployedProjectLink="/"
          projectImg={require("./images/Project-Portfolio.png")}
        />

        <ProjectCard
          projectTitle="Managewise Clone"
          projectDesc="The ManageWise Clone is a project built using React that mirrors the
polished and user-friendly design of the ManageWise website."
          projectLink="https://github.com/vivekgogi/ManageWise-Clone"
          deployedProjectLink="https://managewiseclone-vivekgogi.netlify.app/"
          projectImg={require("./images/Project-ManageWise.png")}
        />

        <ProjectCard
          className="odd"
          projectTitle="Knowledge Quest Quiz Website"
          projectDesc="The Knowledge Quest is a React based engaging quiz platform that
uses Open Trivia Database API and provides category wise unique questions with
customizable types, difficulty levels."
          projectLink="https://github.com/vivekgogi/Knowledge-Quest"
          deployedProjectLink="https://knowledge-quest-vivekgogi.netlify.app/"
          projectImg={require("./images/Project-KnowledgeQuest.png")}
        />
        <ContactForm id="contact" />
        <Footer />
      </div>
    </>
  );
}

export default App;
