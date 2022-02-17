import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/landingpage/LandingPage";
import ResumeTemplates from "./Components/Resume-templates/ResumeTemplates";
import AboutUs from "./Components/About-Us/AboutUs";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import PersonalDetails from "./Components/Personal-Details/PersonalDetails";
import EducationDetails from "./Components/Education-Details/EducationDetails";
import FinalPage from "./Components/Final-Page/FinalPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path="/about-us" component={AboutUs} />
        <Route path="contact" componenet={PersonalDetails} />
        <Route path="/education" component={EducationDetails} />
        <Route path="/finalize" component={FinalPage} />
        <Route path="/contact" component={PersonalDetails} />
        <Route path="/login" component={Login} />
        <Route  path="/register" component={Register} />
        <Route path="/templates" component={ResumeTemplates} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
