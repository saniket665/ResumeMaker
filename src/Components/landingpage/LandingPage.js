import React from 'react';
import "./LandingPage.css";
import resumeImg from "../img/landingpage.png";
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
  <div className="landing-page">
      <h2 className="title">Create a Resume That Stands out</h2>
      <p className="subtitle">Create a Resume that perfectally describes your skils and match job profile.</p>
      <Link to="/templates">
      <button className="getting-started-btn">Get Started for Free</button>  
      </Link>
      <div className="image">
          <img src={resumeImg} alt="" />
      </div>
  </div>
  );
}

export default LandingPage;
