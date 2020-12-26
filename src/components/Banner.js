import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
  FaMouse,
} from "react-icons/fa";

const Banner = (props) => {

  const [state] = React.useState({
    image: "/images/my-avatar.png",
  });

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <div className="jello-horizontal">
                    <li>
                      <FaFacebookF className="headerIcon" />
                    </li>
                  </div>
                  <div className="jello-horizontal1">
                    <li>
                      <FaTwitter className="headerIcon" />
                    </li>
                  </div>
                  <div className="jello-horizontal2">
                    <li>
                      <FaPinterest className="headerIcon" />
                    </li>
                  </div>
                  <div className="jello-horizontal3">
                    <li>
                      <FaInstagram className="headerIcon" />
                    </li>
                  </div>
                </ul>
                <h1 className="tracking-in-contract-bck-bottom" style={{color: "#fff"}}>
                  {props.title}
                </h1>
                <p className="text-focus-in">{props.subtitle}</p>
                <div className="header__buttons">
                  <a
                    href="https://github.com/rivaanranawat"
                    className="btn btn-outline cta"
                    style={{
                      visibility: "visible",
                      animationDelay: "1s",
                      animationName: "fadeInUp",
                    }}
                  >
                    GitHub
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <btn
                    onClick={() => {
                      let destination = document.querySelector(".about");
                      destination.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="btn btn-smart btn-outline"
                  >
                    <FaMouse className="mouse bounce-in-top" />
                  </btn>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
