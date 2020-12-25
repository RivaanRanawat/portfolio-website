import React, { useState } from "react";
import axios from "axios";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";
const Projects = () => {
  const [header] = React.useState({
    mainHeader: "PROJECTS",
    subHeading: "My Projects",
    text:
      "Below you'll find my most favourite projects from Flutter and React! Make sure to click on them if you like them to get redirected to GitHub",
  });

  // const [names, setNames] = useState([]);

  // const fetchGithubData = async () => {
  //   const res = await axios.get(" https://api.github.com/users/rivaanranawat/repos");
  //   for (let i = 0; i < res.data.length; i++) {
  //     setNames(res.data[i]["name"]);
  //   }
  //   console.log(names);
  // }

  // fetchGithubData();
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
      industry. simply dummy",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Photography",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Desing",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 4,
      icon: <FaApple className="commonIcons" />,
      heading: "App Devlopment",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 5,
      icon: <FaFileVideo className="commonIcons" />,
      heading: "Video Editing",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "SEO Expert",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <Fade top>
            <div className="common">
              <h3 className="heading">{header.mainHeader}</h3>
              <h1 className="mainHeader">{header.subHeading}</h1>
              <p className="mainContent">{header.text}</p>
              <div className="commonBorder"></div>
            </div>
          </Fade>

          <div className="row bgMain">
            {state.map((info) => (
              <Fade left>
                <div className="col-4 bgMain">
                  <div className="services__box">
                    {info.icon}
                    <div className="services__box-header">{info.heading}</div>
                    <div className="services__box-p">{info.text}</div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
