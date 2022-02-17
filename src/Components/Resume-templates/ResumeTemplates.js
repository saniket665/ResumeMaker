import React from 'react';
import "./ResumeTemplates.css";
import {skincds} from "../../constants/typeCodes";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import { setDocument, updateDocument } from '../../Redux/action/documentActions';

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
        {skincds.map((skincd, index) => (
          <div key={index} className="template-card">
            <img src={'/images/' + skincd + '.svg'} className="template-img" alt="" />
            <button className="use-template-btn" onClick={() => changeSkin(skincd)}>Use Template</button>
          </div>
        ))
        }
        </div>
  </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Id: state.document.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDocuments: (skincd) => dispatch(setDocument(skincd)),
    updateDocuments: (skincd) => dispatch(updateDocument(skincd))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ResumeTemplates);
