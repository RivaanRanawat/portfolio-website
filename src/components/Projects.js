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
  FaCode,
  FaBook,
  FaVideo,
  FaConnectdevelop,
  FaSort,
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
      icon: <FaBook className="commonIcons" />,
      heading: "Turn Pages",
      text: "Book Reading With Your Friends Made Possible with this App!",
      link: "https://github.com/RivaanRanawat/r",
    },
    {
      id: 2,
      icon: <FaCode className="commonIcons" />,
      heading: "Basica",
      text: "My own programming language with basic features!",
      link: "https://github.com/RivaanRanawat/basica",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Astra",
      text: "A video chatting and texting app!",
      link: "https://github.com/RivaanRanawat/astra",
    },
    {
      id: 4,
      icon: <FaConnectdevelop className="commonIcons" />,
      heading: "Connect World",
      text: "Chatting Website to find strangers and connect with them!",
      link: "https://github.com/RivaanRanawat/connectworld",
    },
    {
      id: 5,
      icon: <FaVideo className="commonIcons" />,
      heading: "Zoom Clone",
      text: "Video Conferencing App like Zoom",
      link: "https://github.com/RivaanRanawat/zoom-clone",
    },
    {
      id: 6,
      icon: <FaSort className="commonIcons" />,
      heading: "Sorting Visualizer",
      text: "An App to visualise famous Sorting Algorithms",
      link: "https://github.com/RivaanRanawat/sorting-visualiser",
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
                  <a href={info.link}>
                    <div className="services__box">
                      {info.icon}
                      <div className="services__box-header">{info.heading}</div>
                      <div className="services__box-p">{info.text}</div>
                    </div>
                  </a>
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
