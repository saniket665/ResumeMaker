import React from 'react';
import "./ResumeTemplates.css";
import {skincds} from "../../constants/typeCodes";
import skin1 from "./images/skin1.jpg";
import skin2 from "./images/skin2.jpg";
import skin3 from "./images/skin3.jpg";
import skin4 from "./images/skin4.png";

import {useHistory} from "react-router-dom";

import ResumeTemplate from './ResumeTemplate';

function ResumeTemplates(props) {
  const history = useHistory();
  const changeSkin = (value) => {
    if(props.Id !== null) {
      props.updateDocuments(value);
    }
    else {
      props.setDocuments(value);
    }
    history.push("/contact");
  }
  return (
  <div className="resume-template-container">
      <h3 className="resume-template-title">Select a Resume Template to get Started</h3>
      <p>You’ll be able to edit and change this template later!</p>
      <div className="resume-templates">
        {/* {skincds.map((skincd, index) => (
          <div key={index} className="template-card">
            <img src={'images/' + skincd + '.svg'} className="template-img" alt="" />
            <button className="use-template-btn" onClick={() => changeSkin(skincd)}>Use Template</button>
          </div>
        )) */}
        <ResumeTemplate skincd={skin1}/>
        <ResumeTemplate skincd={skin2}/>
        <ResumeTemplate skincd={skin3}/>
        <ResumeTemplate skincd={skin4}/>
        </div>
  </div>
  );
}

export default ResumeTemplates;