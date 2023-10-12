import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../../../context/UserContext";
import Landing from "./images/Landing.png";
import Login from "./images/Login.png";
import MovieInfo from "./images/MovieInfo.png";
import Register from "./images/Register.png";
import Desktop from "./images/desktop.mov";
import "./MoreInfo.css";
import ReactPlayer from "react-player";

function MoreInfo() {
  const { info } = useContext(UserContext);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  console.log(width);

  return (
    <div className="moreinfo__outercontainer">
      <div className="main__info">
        <div>
          <h1 className="projectTitle">{info?.name}</h1>
        </div>
        <div className="moreinfo__image__outercontainer">
          <div className="moreinfo__image__container">
            <img className="moreinfo__image" src={info?.image} />
          </div>
        </div>
        <div className="desc">
          <div className="dec__container">
            <p>{info?.second__desc}</p>
            {/* <a>link to github repo</a> */}
          </div>
        </div>
      </div>
      <div>
        <div className="wire_frames">
          <div>
            <h2 className="projectTitle">Wire Frames</h2>
            <div>
              <div className="image__container__grid">
                <div className="wireframe__image__grid">
                  <div className="wireframe__image__container">
                    <img
                      className="wireframe__image"
                      src={Login}
                      alt="wireframe"
                    />
                  </div>
                </div>
                <div className="wireframe__image__grid">
                  <div className="wireframe__image__container">
                    <img
                      className="wireframe__image"
                      src={Register}
                      alt="wireframe"
                    />
                  </div>
                </div>
                <div className="wireframe__image__grid">
                  <div className="wireframe__image__container">
                    <img
                      className="wireframe__image"
                      src={Landing}
                      alt="wireframe"
                    />
                  </div>
                </div>
                <div className="wireframe__image__grid">
                  <div className="wireframe__image__container">
                    <img
                      className="wireframe__image"
                      src={MovieInfo}
                      alt="wireframe"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="functionality__outer__container">
          <div className="functionality__container">
            <h2 className="projectTitle">Functionality</h2>
            <div className="functions__grid">
              <div className="functions">
                <div className="player">
                  <ReactPlayer
                    width={width < 800 ? 300 : 600}
                    url={Desktop}
                    playing={true}
                    controls={false}
                    loop
                    muted
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bartenders">
        <div className="bars"></div>
        <div className="bars"></div>
        <div className="bars"></div>
        <div className="bars"></div>
        <div className="bars"></div>
      </div>
    </div>
  );
}

export default MoreInfo;
