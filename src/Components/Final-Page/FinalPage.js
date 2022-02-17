import React from 'react';
import ResumeViewer from '../ResumeViewer/ResumeViewer';
import "./FinalPage.css";
import {connect} from "react-redux";
import {Link} from "react-router-dom"; 
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {useFirestore} from "react-redux-firebase"; 
import { firebaseConnect } from 'react-redux-firebase';

function FinalPage(props) {
    const educationSection = props.education;
    const contactSection = props.contact;
    const documentSection = props.document;
    let firestore = useFirestore();
    const downloadResume = () => {
        const resume = document.getElementById("resume-preview");
        // console.log(resume);
        html2canvas(resume)
         .then((canvas) => {
           const imgData = canvas.toDataURL('image/png');
           const pdf = new jsPDF("p", "mm", "a4");
           var width = pdf.internal.pageSize.getWidth();
           var height = pdf.internal.pageSize.getHeight();
           pdf.addImage(imgData, 'JPEG', 0, 0,width,height);
           // pdf.output('dataurlnewwindow');
           pdf.save("resume.pdf");
         }).catch(function(error){
           console.log(error)
         })
    }
  const saveToDatabase = async() => {
    let user = await firestore.collection('users').doc(props.auth.uid).get()
      user = user.data()
      let obj
      if(user.skincds !== undefined){
          obj = {...user.skincds,[documentSection.id]:{educationSection:educationSection,contactSection:contactSection,document:documentSection}}
      }else{
          obj = {[documentSection.id]:{educationSection:educationSection,contactSection:contactSection,document:documentSection}}
      }
      await firestore.collection('users').doc(props.auth.uid).update({
        skincds : obj
      })
    }
  return (
  <div className="finalpage-container">
      <div className="resume-preview-card" id="resume-preview">
          <ResumeViewer contactSection={props.contact} educationSection={props.education}/>
      </div>
      <div className="download-save">
          <p>Download Resume As Pdf</p>
          <a onClick={downloadResume}>Download resume</a>
          <p>Save To Database</p>
          <a onClick={saveToDatabase}>Save to Database</a>
      </div>

  </div>
  );
}

const mapStateToProps = (state) => {
    return {
        contact: state.contact,
        education: state.education,
        document: state.document,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(FinalPage);
