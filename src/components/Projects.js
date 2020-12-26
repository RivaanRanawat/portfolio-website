import React, { useState, useEffect } from "react";
import axios from "axios";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import { db } from "../configs/firebase";

import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
  FaCode,
  FaBook,
  FaVideo,
  FaConnectdevelop,
  FaSort,
} from "react-icons/fa";
const Projects = (props) => {
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <Fade top>
            <div className="common">
              <h3 className="heading">PROJECTS</h3>
              <h1 className="mainHeader">My Projects</h1>
              <p className="mainContent">{props.desc}</p>
              <div className="commonBorder"></div>
            </div>
          </Fade>

          <div className="row bgMain">
            <Fade left>
              <div className="col-4 bgMain">
                <a href={props.project1Name["projectLink"]}>
                  <div className="services__box">
                    <FaBook className="commonIcons" />
                    <div className="services__box-header">
                      {props.project1Name["projectName"]}
                    </div>
                    <div className="services__box-p">
                      {props.project1Name["projectDes"]}
                    </div>
                  </div>
                </a>
              </div>
            </Fade>

            <Fade left>
              <div className="col-4 bgMain">
                <a href={props.project2Name["projectLink"]}>
                  <div className="services__box">
                    <FaCode className="commonIcons" />
                    <div className="services__box-header">
                      {props.project2Name["projectName"]}
                    </div>
                    <div className="services__box-p">
                      {props.project2Name["projectDes"]}
                    </div>
                  </div>
                </a>
              </div>
            </Fade>

            <Fade left>
              <div className="col-4 bgMain">
                <a href={props.project3Name["projectLink"]}>
                  <div className="services__box">
                    <FaCircleNotch className="commonIcons" />
                    <div className="services__box-header">
                      {props.project3Name["projectName"]}
                    </div>
                    <div className="services__box-p">
                      {props.project3Name["projectDes"]}
                    </div>
                  </div>
                </a>
              </div>
            </Fade>

            <Fade left>
              <div className="col-4 bgMain">
                <a href={props.project4Name["projectLink"]}>
                  <div className="services__box">
                    <FaConnectdevelop className="commonIcons" />
                    <div className="services__box-header">
                      {props.project4Name["projectName"]}
                    </div>
                    <div className="services__box-p">
                      {props.project4Name["projectDes"]}
                    </div>
                  </div>
                </a>
              </div>
            </Fade>

            <Fade left>
              <div className="col-4 bgMain">
                <a href={props.project5Name["projectLink"]}>
                  <div className="services__box">
                    <FaVideo className="commonIcons" />
                    <div className="services__box-header">
                      {props.project5Name["projectName"]}
                    </div>
                    <div className="services__box-p">
                      {props.project5Name["projectDes"]}
                    </div>
                  </div>
                </a>
              </div>
            </Fade>

            <Fade left>
              <div className="col-4 bgMain">
                <a href={props.project6Name["projectLink"]}>
                  <div className="services__box">
                    <FaSort className="commonIcons" />
                    <div className="services__box-header">
                      {props.project6Name["projectName"]}
                    </div>
                    <div className="services__box-p">
                      {props.project6Name["projectDes"]}
                    </div>
                  </div>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
