import React, {useState} from "react";
import "./Register.css";
import {connect} from "react-redux";
import {register} from "../../Redux/action/authActions";
import {useHistory} from "react-router-dom"; 
import {isLoaded} from "react-redux-firebase"; 

function Register(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const onSubmit = async() => {
    let res = await props.register({email: email, name: name, password: password});
      if(props.auth != null) {
        history.push("/")
      }
  }
  return (
    <>
    {!isLoaded(props.auth) ? <></> : 
    <>
    {props.authMine.loading? <h3 style={{marginTop: "2rem", height: ""}}>Please wait we are registering you....</h3> :
    <div className="register-wrapper">
      <div className="register-container">
        <div className="form">
          <h2 className="register-title">Enter your details</h2>
          <div className="form-inputs">
            <label className="label">Name</label>
            <input type="text" className="input" value={name} onChange={handleName} />
            <label className="label">Email</label>
            <input type="email" className="input" value={email} onChange={handleEmail} />
            <label className="label">Password</label>
            <input type="text" className="input" value={password} onChange={handlePassword} /> 
            </div>        
            <div className="register-btn-container">
            <button className="register-btn" onClick={onSubmit}>Register</button>
          </div>
        </div>
      </div>
    </div>
    }
    </>
    }
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authMine: state.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    register: (userData) => dispatch(register(userData)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
