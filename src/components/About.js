import React,{useEffect, useState} from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import {db} from "../configs/firebase";

const About = (props) => {

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
                <h1>{props.headerr}</h1>
              </Fade>

              <Fade right>
                <div className="about__info-p1">
                  {props.para1}
                </div>
              </Fade>

              <Fade right>
                <div className="about__info-p2">
                  {props.para2}
                </div>
              </Fade>

              <Fade bottom>
                <div className="info__contacts">
                  <div className="row">
                      <div className="col-6">
                        <strong className="aboutText">Name: </strong>
                        <p className="aboutText">{props.name}</p>
                      </div>
                      <div className="col-6">
                        <strong className="aboutText">Email:</strong>
                        <p className="aboutText">{props.email}</p>
                      </div>
                      <div className="col-6">
                        <strong className="aboutText">Phone:</strong>
                        <p className="aboutText">{props.phone}</p>
                      </div>
                      <div className="col-6">
                        <strong className="aboutText">GitHub:</strong>
                        <p className="aboutText">rivaanranawat</p>
                      </div>
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