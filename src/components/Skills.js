import React, { useEffect, useState } from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

const Skills = (props) => {

  const [header] = React.useState({
    subHeading: "MY SKILLS",
  });

  return (
    <div className="skills">
      <div className="container">
        <Fade top>
          <div className="common">
            <h3 className="heading"></h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{props.des}</p>
            <div className="commonBorder"></div>
          </div>
        </Fade>
        <div className="row">
          <Flip left>
            <div className="col-4">
              <div className="price">
                <div className="priceHeading">Technologies</div>
                <div className="price__rs">
                  70
                  <span>%</span>
                </div>
                <ul>
                  <li>{props.technologyArray[0]}</li>
                  <li>{props.technologyArray[1]}</li>
                  <li>{props.technologyArray[2]}</li>
                  <li>{props.technologyArray[3]}</li>
                </ul>
                <div className="price__btn">
                  <a href="" className="btn btn-outline">
                    Projects
                  </a>
                </div>
              </div>
            </div>
          </Flip>
          <Flip top>
            <div className="col-4">
              <div className="price">
                <div className="priceHeading">PROGRAMMING LANGUAGES</div>
                <div className="price__rs">
                  80
                  <span>%</span>
                </div>
                <ul>
                  <li>{props.languageArray[0]}</li>
                  <li>{props.languageArray[1]}</li>
                  <li>{props.languageArray[2]}</li>
                  <li>{props.languageArray[3]}</li>
                </ul>
                <div className="price__btn">
                  <a href="" className="btn btn-outline">
                    Projects
                  </a>
                </div>
              </div>
            </div>
          </Flip>
          
          <Flip right>
            <div className="col-4">
              <div className="price">
                <div className="priceHeading">GAMING</div>
                <div className="price__rs">
                  20
                  <span>%</span>
                </div>
                <ul>
                  <li>{props.gamesArray[0]}</li>
                  <li>{props.gamesArray[1]}</li>
                  <li>{props.gamesArray[2]}</li>
                  <li>{props.gamesArray[3]}</li>
                </ul>
                  <div className="price__btn">
                    <a href="" className="btn btn-outline">
                      Accounts
                    </a>
                  </div>
              </div>
            </div>
          </Flip>
        </div>
      </div>
    </div>
  );
};

export default Skills;
