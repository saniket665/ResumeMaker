import React from 'react';
import {connect} from "react-redux";
import { setDocument, updateDocument } from '../../Redux/action/documentActions';
import {useHistory} from "react-router-dom";
import "./ResumeTemplates.css";

const ResumeTemplate = (props) => {
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
    <div className="template-card">
        <img src={props.skincd} className="template-img" alt="" />
        <button className="use-template-btn" onClick={() => changeSkin(props.skincd)}>Use Template</button>
    </div>
  )
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
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(ResumeTemplate);