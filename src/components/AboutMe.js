import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/about-profile.jpg";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <h3>Hey there, 👋</h3>
        👩‍💻 I'm <span>Vivek Gogi</span>, a passionate Computer Science and
        Engineering Student eager to contribute my skills and enthusiasm to the
        Tech World.
        <br />
        <br />
        🎓 Recently completed my{" "}
        <span>B.Tech in Computer Science and Engineering</span>, I believe in
        the power of innovation and am always excited to explore new
        technologies.
        <br />
        <br />
        📚 I am currently accomplished in{" "}
        <span>Full-Stack Web Development</span> and specialize in{" "}
        <span>Frontend Development.</span>
        <br />
        <br />
        🌐 I'm a <span>strong advocate for continuous learning</span> and love
        to keep up with the latest trends in the tech industry.
        <br />
        <br />
        🤝 I'm <span>open to connecting</span> with fellow students,
        professionals, mentors, and companies that share my passion for
        technology and innovation.
        <br />
        <br />
        Want to know more about me? Feel free to 
        <a className="resume" href="/" target="_blank" rel="noopener noreferrer">
          Explore My Resume
        </a>
        <br />
        <br />
        #ComputerScience #Engineering #TechEnthusiast 🌟🚀
      </div>
      <div className="profile-photo">
        <div className="heading"> About Me</div>
        <img className="img" src={myProfile} alt="Profile"></img>
      </div>
      <div className="name">Vivek</div>
    </div>
  );
}
