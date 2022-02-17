import React from "react";
import "./AboutUs.css";
import about from "../img/aboutus.jpg";

function AboutUs() {
  return (
    <div className="about-container">
        <div className="about-content">
        <p>
        Do you have any comments or questions? Our team will be happy to assist
        you. Send us a message.
      </p>
      <p>resumebuilder@gmail.com</p>
      <p>
        We are here to answer any questions regarding our resume generator, do
        not hesitate to contact us for any reason. We will respond in less than
        24 hours from receipt of the email. Thanks for trusting us
      </p>
        </div>
        <div className="about-img">
            <img src={about} alt="" />
        </div>
    </div>
  );
}

export default AboutUs;
