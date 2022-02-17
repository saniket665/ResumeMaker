import React from 'react';
import "./resumeViewer.css";
import {fieldCd as Field} from "../../constants/typeCodes";

function ResumeViewer({contactSection, educationSection}) {
  const getValue = (key, extravalue) => {
    if(contactSection) {
      return contactSection[key] ? contactSection[key] + (extravalue ? extravalue:''):'' 
    }
    return '';
  }
  const getValueEducation = (key) => {
    if(educationSection && educationSection[key]) {
      return educationSection[key];
    }
    else {
      return '';
    }
  }
  return (
  <div className="resume-preview-container">
      <p className="uppercase">{getValue(Field.FirstName, ' ') +  getValue(Field.LastName)}</p>
      <p>{getValue(Field.City, ", ") + getValue(Field.State, ",") + getValue(Field.Country, ', ') + getValue(Field.Pincode, "")}</p>
      <p>{getValue(Field.Email)}</p>
      <p>{getValue(Field.Phone)}</p>
      <h3 className="preview-title">Professional Summary</h3>
      <hr />
      <p className="uppercase p-left">{getValue(Field.ProfSummary)}</p>
      <div className="education-details">
          <h3 className="preview-title">Education details</h3>
          <hr />
          <p className="p-left">{getValueEducation(Field.CollegeName)}</p>
          <p className="p-left">{getValueEducation(Field.Degree)}</p>
          <p className="p-left">{getValueEducation(Field.City)}</p>
          <p className="p-left">{getValueEducation(Field.CGPA)}</p>
          <p className="p-left">{getValueEducation(Field.GraduationMonth)}</p>
          <p className="p-left">{getValueEducation(Field.GraduationYear)}</p>
      </div>
  </div>
  );
}

export default ResumeViewer;
