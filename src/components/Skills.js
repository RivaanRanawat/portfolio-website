import React from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

const Skills = () => {
  const [header] = React.useState({
    mainHeader: "",
    subHeading: "MY SKILLS",
    text:
      "I am familiar with various programming languages and technologies. Check them out below!",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Technologies",
      price: 70,
      msg1: "ANDROID STUDIO",
      msg2: "REACT",
      msg3: "FLUTTER",
      msg4: "GIT",
    },
    {
      id: 2,
      heading: "PROGRAMMING LANGUAGES",
      price: 80,
      msg1: "PYTHON",
      msg2: "JAVA",
      msg3: "DART",
      msg4: "JAVASCRIPT",
    },
    {
      id: 3,
      heading: "GAMING",
      price: 20,
      msg1: "CODM",
      msg2: "CS:GO",
      msg3: "FORTNITE",
      msg4: "PUBG",
    },
  ]);
  return (
    <div className="skills">
      <div className="container">
        <Fade top>
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        </Fade>
        <div className="row">
          {state.map((prices) =>
            prices.id == 1 ? (
              <Flip left>
                <div className="col-4" key={prices.id}>
                  <div className="price">
                    <div className="priceHeading">{prices.heading}</div>
                    <div className="price__rs">
                      {prices.price}
                      <span>%</span>
                    </div>
                    <ul>
                      <li>{prices.msg1}</li>
                      <li>{prices.msg2}</li>
                      <li>{prices.msg3}</li>
                      <li>{prices.msg4}</li>
                    </ul>
                    {prices.id != 3 ? (
                      <div className="price__btn">
                        <a href="" className="btn btn-outline">
                          Projects
                        </a>
                      </div>
                    ) : (
                      <div className="price__btn">
                        <a href="" className="btn btn-outline">
                          Accounts
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </Flip>
            ) : prices.id == 2 ? (
              <Flip top>
                <div className="col-4" key={prices.id}>
                  <div className="price">
                    <div className="priceHeading">{prices.heading}</div>
                    <div className="price__rs">
                      {prices.price}
                      <span>%</span>
                    </div>
                    <ul>
                      <li>{prices.msg1}</li>
                      <li>{prices.msg2}</li>
                      <li>{prices.msg3}</li>
                      <li>{prices.msg4}</li>
                    </ul>
                    {prices.id != 3 ? (
                      <div className="price__btn">
                        <a href="" className="btn btn-outline">
                          Projects
                        </a>
                      </div>
                    ) : (
                      <div className="price__btn">
                        <a href="" className="btn btn-outline">
                          Accounts
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </Flip>
              )
              : (
              <Flip right>
                <div className="col-4" key={prices.id}>
                  <div className="price">
                    <div className="priceHeading">{prices.heading}</div>
                    <div className="price__rs">
                      {prices.price}
                      <span>%</span>
                    </div>
                    <ul>
                      <li>{prices.msg1}</li>
                      <li>{prices.msg2}</li>
                      <li>{prices.msg3}</li>
                      <li>{prices.msg4}</li>
                    </ul>
                    {prices.id != 3 ? (
                      <div className="price__btn">
                        <a href="" className="btn btn-outline">
                          Projects
                        </a>
                      </div>
                    ) : (
                      <div className="price__btn">
                        <a href="" className="btn btn-outline">
                          Accounts
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </Flip>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;