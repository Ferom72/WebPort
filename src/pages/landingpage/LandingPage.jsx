import AboutMe from "./sections/aboutme/AboutMe";
import WebProjects from "./sections/webprojects/WebProjects";
import MachineLearning from "./sections/machinelearning/MachineLearning";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="outerContainer">
      <AboutMe />
      <WebProjects />
      <MachineLearning />
      <div className="bartender">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default LandingPage;
