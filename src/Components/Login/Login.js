import React, {useState, useEffect} from "react";
import "../Register/Register.css";
import {connect} from "react-redux";
import {SignIn} from "../../Redux/action/authActions";
import {useHistory} from "react-router-dom";

function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if(props.auth.uid) {
      history.push("/");
    }
  }, [props])

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const signIn = async() => {
    const res = await props.login({email: email, password: password});
    if(props.auth.uid !== null) {
      history.push("/");
    }
  }

  return (
    <>
    {
      props.authMine.loading ? <h3 style={{marginTop: "2%", height: "88vh", fontSize: "1.6rem", textAlign: "center"}}>Please wait we are signing you...</h3> :
      <div className="register-wrapper">
      <div className="register-container">
        <div className="form">
          <h2 className="register-title">Enter Login details</h2>
          <div className="form-inputs">
            <label className="label">Email</label>
            <input type="email" className="input"  value={email} onChange={handleEmail} />
            <label className="label">Password</label>
            <input type="text" className="input" value={password} onChange={handlePassword} /> 
            </div>        
            <div className="register-btn-container">
            <button className="register-btn" onClick={signIn}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
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
    login: (userData) => dispatch(SignIn(userData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
