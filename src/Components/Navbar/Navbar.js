import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import {isLoaded, isEmpty} from "react-redux-firebase";
import {connect} from "react-redux";
import {SignOut} from "../../Redux/action/authActions";
import {useHistory} from "react-router-dom";
function LoggedOut() {
  return (
    <ul className="links">
      <NavLink to="/register">
        <li className="link">Register</li>
      </NavLink>
      <NavLink to="/login">
        <li className="link">Sign In</li>
      </NavLink>
    </ul>
  );
}
function Navbar(props) {
  const history = useHistory();
  const signout = async() => {
    let res = await props.signout();
    if(props.auth == null) {
      history.push("/");
    }
  }
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <h2 className="logo-text">Resume Builder</h2>
        </NavLink>
      </div>
      <div className="navbar-links">
        <ul className="links">
          <NavLink to="/templates">
            <li className="link">Resume Templates</li>
          </NavLink>
          <NavLink to="/about-us">
            <li className="link">About Us</li>
          </NavLink>
        </ul>
        {
        isLoaded(props.auth) && !isEmpty(props.auth) ?
        <ul className="links">
            <li className="link auth-link">Logged in as {props.auth.email}</li>
            <li className="link" onClick={signout}>Signout</li>
        </ul> :
        <LoggedOut />
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(SignOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
