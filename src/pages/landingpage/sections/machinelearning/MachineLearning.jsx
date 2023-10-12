import IMAGE from "./images/MainPic.png";
import Unreal from "./images/unreals.png";
import Python from "./images/python_Icon.webp";
import "./MachineLearning.css";

function MachineLearning() {
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
  return (
    <div className="machine__container">
      <div className="divider__titles">
        <h2>Machine Learning Project</h2>
      </div>
      <div className="machine__grid">
        <div className="machine__image__outercontainer">
          <div className="machine__image__innercontainer">
            <img className="machine__image" src={IMAGE} alt="drone swarm" />
          </div>
        </div>
        <div className="machine__info__container">
          <div className="overview__container">
            <h4 className="desc__title">Overview</h4>
            <p className=" machine__text">
              As part of a collaborative effort with a multidisciplinary team of
              four UCF students, I played a pivotal role in the design and
              development of an application geared towards enabling
              heterogeneous drone swarms to navigate through natural disaster
              scenarios and locate individuals in distress. This ambitious
              project encompassed several key facets. I spearheaded the creation
              of an Unreal Engine-based application tailored for autonomous
              drones, seamlessly integrating essential components such as the
              AirSim API for drone functionality, ROS for inter-drone
              communication through ROS packages, Docker for enhanced
              accessibility, and YOLO for robust object detection.
            </p>
          </div>
          <div className="machine__techStack__outercontainer">
            <div className="tech">
              <p className="tech__stack_txt">Tech Stack:</p>
            </div>
            <div className="techStack__grid">
              <div className="tech_container ">
                <img
                  className="machine__techImage hidden"
                  src={Python}
                  alt="techstack"
                />
              </div>
              <div className="tech_container ">
                <img
                  className="machine__techImage unreal hidden"
                  src={Unreal}
                  alt="techstack"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MachineLearning;
