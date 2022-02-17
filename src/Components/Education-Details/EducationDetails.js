import React, {useState} from 'react';
import ResumeViewer from '../ResumeViewer/ResumeViewer';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import {setEducation, updateEducation} from "../../Redux/action/educationActions";
import {fieldCd as Field} from "../../constants/typeCodes";
import {useHistory} from "react-router-dom";

function EducationDetails(props) {
  const history = useHistory();
  const [education, setEducation] = useState(props.education);
  const changeEducation = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setEducation({...education, [key]: value})
  }
  const getValue = (key) => {
    if(education && education[key]) {
      return education[key]
    }
    return "";
  }
  const onSubmit = () => {
    if(props.education !== null) {
      props.updateEducations(education);
    }
    else {
      props.setEducations(education);
    }
    history.push("/finalize");
  }
  return (
    <div className="details-container">
    <div className="form-card">
        <h2 className="form-title">Education Details</h2>
        <div className="form-inputs">
            <div className="input-container">
                <label className="label">College Name</label>
                  <input type="text" className="input detail-input" value={getValue(Field.CollegeName)} name={Field.CollegeName} onChange={changeEducation}/> 
            </div>
            <div className="input-container">
            <label className="label">Degree</label>
                  <input type="text" className="input detail-input" value={getValue(Field.Degree)} name={Field.Degree} onChange={changeEducation}/> 
            </div>
            <div className="input-container">
            <label className="label">CGPA</label>
                  <input type="text" className="input detail-input" value={getValue(Field.CGPA)} name={Field.CGPA} onChange={changeEducation}/> 
            </div>
            <div className="input-container">
            <label className="label">City/State</label>
                  <input type="text" className="input detail-input" value={getValue(Field.City)} name= {Field.City} onChange={changeEducation}/> 
            </div>
            <div className="input-container">
                <label className="label">Graduation Month</label>
                  <input type="text" className="input detail-input" value={getValue(Field.GraduationMonth)} name={Field.GraduationMonth} onChange={changeEducation}/> 
            </div>
            <div className="input-container">
                <label className="label">Graduation Year</label>
                  <input type="text" className="input detail-input" value={getValue(Field.GraduationYear)} name={Field.GraduationYear} onChange={changeEducation} /> 
            </div>
        </div>
        <div className="next-btn-container">
              <button className="next-btn" onClick={onSubmit}>Next</button>
          </div>
          <div className="back-btn-container">
            <Link to="/contact">
              <button className="back-btn">Back</button>
            </Link>
          </div>
      </div>
      <div className="resume-preview">
        <ResumeViewer contactSection={props.contact} educationSection={education}/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    education: state.education,
    contact: state.contact
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEducations: (education) => dispatch(setEducation(education)),
    updateEducations: (education) => dispatch(updateEducation(education))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EducationDetails);
