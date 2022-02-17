import React, {useState} from 'react';
import "./PersonalDetails.css";
import ResumeViewer from '../ResumeViewer/ResumeViewer';
import { Link } from 'react-router-dom';
import {fieldCd as Field} from "../../constants/typeCodes";
import {connect} from "react-redux";
import {setContact, updateContact} from "../../Redux/action/contactActions";
import {useHistory} from "react-router-dom";

function PersonalDetails(props) {
  const history = useHistory();
  const [contact, setContact] = useState(props.contact);
  const change = (e) => {
    let value = e.target.value;
    let key = e.target.name;
    setContact({...contact, [key]: value})
  }
  const getValue = (key) => {
    if(contact && contact[key]) {
      return contact[key];
    }
      return "";
  }
  const onSubmit = () => {
    if(props.contact !== null) {
      props.updateContacts(contact);
    } 
    else {
      props.setContacts(contact);
    }
    history.push("/education")
  }

  return (
  <div className="details-container">
      <div className="form-card">
          <h2 className="form-title">Personal Details</h2>
          <div className="form-inputs">
              <div className="input-container">
                  <label className="label">First Name</label>
                    <input type="text" className="input detail-input" value={getValue(Field.FirstName)} name={Field.FirstName} onChange={change}/> 
              </div>
              <div className="input-container">
              <label className="label">Last Name</label>
                    <input type="text" className="input detail-input" value={getValue(Field.LastName)}  name={Field.LastName} onChange={change}/> 
              </div>
              <div className="input-container full">
              <label className="label">Professional Summary</label>
                    <input type="text" className="input detail-input full" value={getValue(Field.ProfSummary)} name={Field.ProfSummary} onChange={change}/> 
              </div>
              <div className="input-container">
              <label className="label">Email</label>
                    <input type="text" className="input detail-input" value={getValue(Field.Email)} name={Field.Email} onChange={change}/> 
              </div>
              <div className="input-container">
              <label className="label">Phone</label>
                    <input type="text" className="input detail-input" value={getValue(Field.Phone)} name={Field.Phone} onChange={change}/> 
              </div>
              <div className="input-container">
                  <label className="label">Profession</label>
                    <input type="text" className="input detail-input" value={getValue(Field.Profession)} name={Field.Profession} onChange={change}/> 
              </div>
              <div className="input-container">
                  <label className="label">Street</label>
                    <input type="text" className="input detail-input" value={getValue(Field.Street)} name={Field.Street} onChange={change}/> 
              </div>
              <div className="input-container">
                  <label className="label">City</label>
                    <input type="text" className="input detail-input" value={getValue(Field.City)} name={Field.City} onChange={change}/> 
              </div>
              <div className="input-container">
                  <label className="label">State</label>
                    <input type="text" className="input detail-input" value={getValue(Field.State)} name={Field.State} onChange={change}/> 
              </div>
              <div className="input-container">
                  <label className="label">Country</label>
                    <input type="text" className="input detail-input" value={getValue(Field.Country)} name={Field.Country} onChange={change}/> 
              </div>
              <div className="input-container">
                  <label className="label">Pincode</label>
                    <input type="text" className="input detail-input" value={getValue(Field.Pincode)} name={Field.Pincode} onChange={change}/>                   
              </div>
          </div>
          <div className="next-btn-container">
              <button className="next-btn" onClick={onSubmit}>Next</button>
          </div>
          <div className="back-btn-container">
            <Link to="/templates">
              <button className="back-btn">Back</button>
            </Link>
          </div>
      </div>
      <div className="resume-preview">
        <ResumeViewer contactSection={contact}/>
      </div>
  </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contact: state.contact
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setContacts: (contact) => dispatch(setContact(contact)),
    updateContacts: (contact) => dispatch(updateContact(contact))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails);
