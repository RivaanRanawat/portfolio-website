import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text: "",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Rivaan Ranawat" },
    { id: 2, title: "Email:", text: "namanrivaan@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 9372656584" },
    { id: 4, title: "GitHub", text: "rivaanranawat" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-600 alignCenter">
          <div className="col-6">
            <Zoom>
              <div className="about__img">
                <img src="/images/my-avatar.png" alt="avatar" />
              </div>
            </Zoom>
          </div>
          <div className="col-6">
            <div className="about__info">
              <Fade top>
                <h1>Hello There</h1>
              </Fade>

              <Fade right>
                <div className="about__info-p1">
                  I'm Rivaan Ranawat, 15 year old tech and coding enthusiast
                  from India! I create websites and mobile apps for fun.
                </div>
              </Fade>

              <Fade right>
                <div className="about__info-p2">
                  I am also interested in gaming and have played many games like
                  PUBG, Fortnite, CS:GO, CODM.
                </div>
              </Fade>

              <Fade bottom>
                <div className="info__contacts">
                  <div className="row">
                    {state.map((info) => (
                      <div className="col-6">
                        <strong className="aboutText">{info.title}</strong>
                        <p className="aboutText">{info.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
