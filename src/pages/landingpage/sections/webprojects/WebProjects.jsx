import Tickets from "./images/MyTickets.png";
import Netflix from "./images/Netflix.png";
import JS from "./images/javaScript_Icon.png";
import NODE from "./images/nodejs.png";
import REACT from "./images/React_Icon.png";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./WebProjects.css";

window.onload = function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
};

function Project({ project, value }) {
  const { SetProjectInfo } = useContext(UserContext);
  const navigate = useNavigate();

  function redirect(e) {
    SetProjectInfo(project);
    e.preventDefault();
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar, i) => {
      bar.style.animationPlayState = "running";
    });
    const lastBar = bars[bars.length - 1];
    lastBar.addEventListener("animationend", () => {
      setTimeout(() => {
        navigate("/moreinfo");
      }, 500);
    });
  }

  if (value === "1") {
    return (
      <div className="web__projects">
        <div className="project__header__container">
          <h3 className="project__sub__title">{project?.name}</h3>
        </div>
        <div className="project__grid__container">
          <div className="project__image__outercontainer">
            <div className="project__image__container">
              <img
                className="project__image"
                src={project?.image}
                alt="project"
              />
            </div>
          </div>
          <div className="project_info__outercontainer">
            <div className="project_info__container">
              <h4 className="desc__title">Overview</h4>
              <p>{project?.desc}</p>
              {project?.name === "MyTickets" ? (
                <div className="Info__Link">
                  <a className="info__Link" onClick={(e) => redirect(e)}>
                    More Info
                  </a>
                </div>
              ) : (
                ""
              )}{" "}
            </div>
            <div className="techStack__outercontainer">
              <div className="tech">
                <p className="tech__stack_txt">Tech Stack:</p>
              </div>
              <div className="techStack__grid">
                <div className="tech_container">
                  <img className="techImage hidden" src={JS} alt="techstack" />
                </div>
                <div className="tech_container">
                  <img
                    className="techImage hidden"
                    src={NODE}
                    alt="techstack"
                  />
                </div>
                <div className="tech_container">
                  <img
                    className="techImage hidden"
                    src={REACT}
                    alt="techstack"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="web__projects">
        <div className="project__header__container">
          <h3 className="project__sub__title otherside">{project?.name}</h3>
        </div>
        <div className="project__grid__container">
          <div>
            <div className="project_info__container">
              <h4 className="desc__title">Overview</h4>
              <p>{project?.desc}</p>
              {project?.name === "MyTickets" ? (
                <a className="Info__Link" onClick={(e) => redirect(e)}>
                  More Info
                </a>
              ) : (
                ""
              )}
            </div>
            <div className="techStack__outercontainer">
              <div className="tech">
                <p className="tech__stack_txt">Tech Stack:</p>
              </div>
              <div className="techStack__grid">
                <div className="tech_container">
                  <img className="techImage hidden" src={JS} alt="techstack" />
                </div>
                <div className="tech_container">
                  <img
                    className="techImage hidden"
                    src={NODE}
                    alt="techstack"
                  />
                </div>
                <div className="tech_container">
                  <img
                    className="techImage hidden"
                    src={REACT}
                    alt="techstack"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="project__image_outercontainer">
              <div className="project__image__container mobile__space">
                <img
                  className="project__image "
                  src={project?.image}
                  alt="project"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function WebProjects() {
  const project = [
    {
      name: "MyTickets",
      desc: `MyTickets is a modern web application designed to provide users 
             with a hassle-free experience for purchasing event tickets. Leveraging 
             the power of React, JavaScript, Node.js, and MongoDB, this platform not 
             only simplifies the ticket buying process but also ensures security and 
             user-friendliness at every step.`,
      second__desc: `The front-end of "MyTickets" is built using React, a popular JavaScript 
                   library for building user interfaces. React's component-based architecture 
                   allowed for the creation of reusable UI elements, ensuring a consistent and 
                   responsive design throughout the application.The back end of "MyTickets" is powered by Node.js, 
                   a JavaScript runtime, and MongoDB, a NoSQL database. This technology stack ensures robustness, 
                   scalability, and data integrity for the application.`,
      image: Tickets,
    },
    {
      name: "Markdown Browser",
      desc: `This project was made in React and uses classic CSS for its styling.
      For this project I just wanted to make the movie display UI as similar 
      as possible as the original Netflix.`,
      image: Netflix,
    },
  ];

  return (
    <div className="webproj__container">
      <div className="divider__titles">
        <h2>Full Stack Projects</h2>
      </div>
      <div className="fullstack_projects_container">
        <div className="project">
          <Project project={project[0]} value="1" />
        </div>
        <div className="project">
          <Project project={project[1]} value="2" />
        </div>
      </div>
    </div>
  );
}

export default WebProjects;
