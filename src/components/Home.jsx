import React from 'react';
import "./home.css"
import titleimg from "../images/title-image.jpg"

const Home = () => {
  return <div className="intro">
   <div className="intro-left">
   <div className="intro-left-wrapper">
   <h3 className="intro-first">Heylo there,</h3>
   <h2 className="intro-second">Divyansh Srivastava this side</h2>
   <div className="intro-title">
   <div className="intro-title-wrapper">
   <div className="intro-title-item">Web Developer</div>
   <div className="intro-title-item">Open Source Enthusiast</div>
   <div className="intro-title-item">Competitive Programmer</div>
   <div className="intro-title-item">Writer</div>
   </div>
   </div>
   </div>
   </div>
   <div className="intro-right"></div>
   <img src={titleimg} className="intro-img" alt="hehe" />
  </div>;
};

export default Home;
