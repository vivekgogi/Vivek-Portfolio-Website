import React from "react";
import "./SkillCardStyle.css";
import { CgCPlusPlus } from "react-icons/cg";
import { DiGit } from "react-icons/di";
import {
  SiReact,
  SiBootstrap,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiChakraui,
} from "react-icons/si";
import { TbBrandCss3, TbBrandHtml5 } from "react-icons/tb";
import { IoLogoNpm } from "react-icons/io";
import {
  FaNode,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";

export default function SkillCard({ id }) {
  return (
    <>
      <div className="skill-container" id={id}>
        <div className="skill-header">My Skills</div>
        <div className="skill-box">
          <h2>Languages</h2>
          <div className="skillset">
            <abbr title="C++">
              <CgCPlusPlus className="techLogo" />
            </abbr>
            <abbr title="Java">
              <FaJava className="techLogo" />
            </abbr>
            <abbr title="Python">
              <FaPython className="techLogo" />
            </abbr>
            <abbr title="HTML 5">
              <TbBrandHtml5 className="techLogo" />
            </abbr>
            <abbr title="CSS 3">
              <TbBrandCss3 className="techLogo" />
            </abbr>
            <abbr title="JavaScript">
              <SiJavascript className="techLogo" />
            </abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Libraries and Frameworks</h2>
          <div className="skillset">
            <abbr title="ReactJS">
              <SiReact className="techLogo" />
            </abbr>
            <abbr title="NodeJS">
              <FaNode className="techLogo" />
            </abbr>
            <abbr title="ExpressJS">
              <FaNodeJs className="techLogo" />
            </abbr>
            <abbr title="NPM">
              <IoLogoNpm className="techLogo" />
            </abbr>
            <abbr title="Tailwind CSS">
              <SiTailwindcss className="techLogo" />
            </abbr>
            <abbr title="Material UI">
              <SiMui className="techLogo" />
            </abbr>
            <abbr title="Material UI">
              <SiChakraui className="techLogo" />
            </abbr>
            <abbr title="Bootstrap">
              <SiBootstrap className="techLogo" />
            </abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Version Control</h2>
          <div className="skillset">
            <abbr title="Git">
              <DiGit className="techLogo" />
            </abbr>
            <abbr title="GitHub">
              <FaGithub className="techLogo" />
            </abbr>
            <abbr title="GitLab">
              <FaGitlab className="techLogo" />
            </abbr>
          </div>
        </div>
      </div>
    </>
  );
}
