import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";

export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="staticTitle">
                Vivek Gogi
              </div>
              <ul className="dynamicTitle">
                <li><span>Software</span></li>
                <li><span>Developer</span></li>
              </ul>
              <a className='btn' href="https://www.linkedin.com/in/vivekgogi/" target="_blank" rel="noopener noreferrer">Hire Me</a>
            </div>
        </div>
        <div className="mask">
            <img className='bg' src={cartoon} alt="Vivek Gogi" />
        </div>
    </div>
  )
}
