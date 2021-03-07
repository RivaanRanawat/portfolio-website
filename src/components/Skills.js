import React, { useEffect, useState } from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import { db } from "../configs/firebase";

const Skills = () => {

  const [header] = React.useState({
    subHeading: "MY SKILLS",
  });
  const [des, setDes] = useState("");
  const [gamesArray, setGamesArray] = useState([]);
  const [technologyArray, setTechnologyArray] = useState([]);
  const [languageArray, setLanguageArray] = useState([]);
  const [techPercent, setTechPercent] = useState("");
  const [langPercent, setLangPercent] = useState("");
  const [gamingPercent, setGamingPercent] = useState("");

  useEffect(() => {
    db.collection("pages")
      .doc("SkillsPage")
      .get()
      .then((snap) => {
        let tempDes = snap.data()["des"];
        let tempGamesArray = snap.data()["games"];
        let tempTechnologyArray = snap.data()["technologies"];
        let tempLanguageArray = snap.data()["languages"];
        let tempGamingPercent = snap.data()["gamesPercent"];
        let tempTechPercent = snap.data()["techPercent"];
        let tempLangPercent = snap.data()["langPercent"];
        setDes(tempDes);
        setGamesArray(tempGamesArray);
        setTechnologyArray(tempTechnologyArray);
        setLanguageArray(tempLanguageArray);
        setLangPercent(tempLangPercent);
        setTechPercent(tempTechPercent);
        setGamingPercent(tempGamingPercent);
      });
  }, [])

  return (
    <div className="skills">
      <div className="container">
        <Fade top>
          <div className="common">
            <h3 className="heading"></h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{des}</p>
            <div className="commonBorder"></div>
          </div>
        </Fade>
        <div className="row">
          <Flip left>
            <div className="col-4">
              <div className="price">
                <div className="priceHeading">TECHNOLOGIES</div>
                <div className="price__rs">
                  {techPercent}
                  <span>%</span>
                </div>
                <ul>
                  <li>{technologyArray[0]}</li>
                  <li>{technologyArray[1]}</li>
                  <li>{technologyArray[2]}</li>
                  <li>{technologyArray[3]}</li>
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
                <div className="priceHeading">PROGRAMMING</div>
                <div className="price__rs">
                  {langPercent}
                  <span>%</span>
                </div>
                <ul>
                  <li>{languageArray[0]}</li>
                  <li>{languageArray[1]}</li>
                  <li>{languageArray[2]}</li>
                  <li>{languageArray[3]}</li>
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
                  {gamingPercent}
                  <span>%</span>
                </div>
                <ul>
                  <li>{gamesArray[0]}</li>
                  <li>{gamesArray[1]}</li>
                  <li>{gamesArray[2]}</li>
                  <li>{gamesArray[3]}</li>
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
