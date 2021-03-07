import React, { useEffect, useState } from "react";
import "../App.css";
import Banner from "./Banner";
import Navi from "./Nav";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import { db } from "../configs/firebase";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  // ABOUT PAGE HOOKS
  const [para1, setPara1] = useState("");
  const [para2, setPara2] = useState("");
  const [email, setEmail] = useState("");
  const [headerr, setHeaderr] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // HOME PAGE HOOKS
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  // SKILLS PAGE HOOKS
  const [des, setDes] = useState("");
  const [gamesArray, setGamesArray] = useState([]);
  const [technologyArray, setTechnologyArray] = useState([]);
  const [languageArray, setLanguageArray] = useState([]);
  const [techPercent, setTechPercent] = useState("");
  const [langPercent, setLangPercent] = useState("");
  const [gamingPercent, setGamingPercent] = useState("");

  // PROJECTS PAGE HOOKS
  const [desc, setDesc] = useState("");

  const [project1Name, setProject1Name] = useState({});

  const [project2Name, setProject2Name] = useState({});

  const [project3Name, setProject3Name] = useState({});

  const [project4Name, setProject4Name] = useState({});

  const [project5Name, setProject5Name] = useState({});

  const [project6Name, setProject6Name] = useState({});

  useEffect(() => {
    setIsLoading(true);
    // ABOUT
    db.collection("pages")
      .doc("AboutPage")
      .get()
      .then((snap) => {
        let tempPara1 = snap.data()["description1"];
        let tempPara2 = snap.data()["description2"];
        let tempEmail = snap.data()["email"];
        let tempPhone = snap.data()["phone"];
        let tempHeader = snap.data()["header"];
        let tempName = snap.data()["name"];

        setPara1(tempPara1);
        setPara2(tempPara2);
        setEmail(tempEmail);
        setHeaderr(tempHeader);
        setName(tempName);
        setPhone(tempPhone);
      });

    // HOME
    db.collection("pages")
      .doc("HomePage")
      .get()
      .then((snapshot) => {
        const dataTitle = snapshot.data()["title"];
        const dataSubtitle = snapshot.data()["subtitle"];
        setTitle(dataTitle);
        setSubtitle(dataSubtitle);
      })
      .catch((error) => console.log(error));

    // SKILLS
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

    // projects
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

    setTimeout(
      function () {
        setIsLoading(false);
      }.bind(this),
      Math.floor(Math.random() * 2000) + 100
    );
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div id="loader">
          <div id="shadow"></div>
          <div id="box"></div>
        </div>
      ) : (
        <div>
          <Navi />
          <div>
            <span class="toggleee"></span>
            <span class="wave"></span>
          </div>
          <Banner title={title} subtitle={subtitle} />
          <About
            para1={para1}
            para2={para2}
            headerr={headerr}
            email={email}
            name={name}
            phone={phone}
          />
          <Skills
            des={des}
            gamesArray={gamesArray}
            technologyArray={technologyArray}
            languageArray={languageArray}
            techPercent={techPercent}
            gamingPercent={gamingPercent}
            langPercent={langPercent}
          />
          <Projects
            desc={desc}
            project1Name={project1Name}
            project2Name={project2Name}
            project3Name={project3Name}
            project4Name={project4Name}
            project5Name={project5Name}
            project6Name={project6Name}
          />
          <Contact />
        </div>
      )}
    </div>
  );
};

export default Home;
