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
const Projects = () => {
  const [desc, setDesc] = useState("");

  const [project1Name, setProject1Name] = useState({});

  const [project2Name, setProject2Name] = useState({});

  const [project3Name, setProject3Name] = useState({});

  const [project4Name, setProject4Name] = useState({});

  const [project5Name, setProject5Name] = useState({});

  const [project6Name, setProject6Name] = useState({});

  useEffect(() => {
    db.collection("pages")
    .doc("ProjectsPage")
    .get()
    .then((snap) => {
      let tempDes = snap.data()["desc"];
      setDesc(tempDes);
      let project1 = snap.data()["project1"];
      let project2 = snap.data()["project2"];
      let project3 = snap.data()["project3"];
      let project4 = snap.data()["project4"];
      let project5 = snap.data()["project5"];
      let project6 = snap.data()["project6"];

      setProject1Name(project1);
      setProject2Name(project2);
      setProject3Name(project3);
      setProject4Name(project4);
      setProject5Name(project5);
      setProject6Name(project6);
    });
  }, [])
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <Fade top>
            <div className="common">
              {/* <h3 className="heading"></h3> */}
              <h1 className="mainHeader">My Projects</h1>
              <p className="mainContent">{desc}</p>
              <div className="commonBorder"></div>
            </div>
          </Fade>

          <div className="row bgMain">
            <Fade left>
              <div className="col-4 bgMain">
                <a href={project1Name["projectLink"]}>
                  <div className="services__box">
                    <FaBook className="commonIcons" />
                    <div className="services__box-header">
                      {project1Name["projectName"]}
                    </div>
                    <div className="services__box-p">
                      {project1Name["projectDes"]}
                    </div>
                  </div>
                </a>
              </div>
            </Fade>

            <Fade left>
              <div className="col-4 bgMain">
                <a href={project2Name["projectLink"]}>
                  <div className="services__box">
                    <FaCode className="commonIcons" />
                    <div className="services__box-header">
                      {project2Name["projectName"]}
                    </div>
                    <div className="services__box-p">
                      {project2Name["projectDes"]}
                    </div>
                  </div>
                </a>
              </div>
            </Fade>

            <Fade left>
              <div className="col-4 bgMain">
                <a href={project3Name["projectLink"]}>
                  <div className="services__box">
                    <FaCircleNotch className="commonIcons" />
                    <div className="services__box-header">
                      {project3Name["projectName"]}
                    </div>
                    <div className="services__box-p">
                      {project3Name["projectDes"]}
                    </div>
                  </div>
                </a>
              </div>
            </Fade>

            <Fade left>
              <div className="col-4 bgMain">
                <a href={project4Name["projectLink"]}>
                  <div className="services__box">
                    <FaConnectdevelop className="commonIcons" />
                    <div className="services__box-header">
                      {project4Name["projectName"]}
                    </div>
                    <div className="services__box-p">
                      {project4Name["projectDes"]}
                    </div>
                  </div>
                </a>
              </div>
            </Fade>

            <Fade left>
              <div className="col-4 bgMain">
                <a href={project5Name["projectLink"]}>
                  <div className="services__box">
                    <FaVideo className="commonIcons" />
                    <div className="services__box-header">
                      {project5Name["projectName"]}
                    </div>
                    <div className="services__box-p">
                      {project5Name["projectDes"]}
                    </div>
                  </div>
                </a>
              </div>
            </Fade>

            <Fade left>
              <div className="col-4 bgMain">
                <a href={project6Name["projectLink"]}>
                  <div className="services__box">
                    <FaSort className="commonIcons" />
                    <div className="services__box-header">
                      {project6Name["projectName"]}
                    </div>
                    <div className="services__box-p">
                      {project6Name["projectDes"]}
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
