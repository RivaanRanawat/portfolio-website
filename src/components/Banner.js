import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
  FaMouse,
  FaGithub,
  FaMedium,
  FaMediumM,
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
                <ul className="header__ul" style={{ color: "#fff" }}>
                  <div className="jello-horizontal">
                    <a href="https://facebook.com/rivaanranawat">
                      <li>
                        <FaFacebookF className="headerIcon" />
                      </li>
                    </a>
                  </div>
                  <div className="jello-horizontal1">
                    <a href="https://namanrivaan.medium.com">
                      <li>
                        <FaMediumM className="headerIcon" />
                      </li>
                    </a>
                  </div>
                  <div className="jello-horizontal2">
                    <a href="https://github.com/rivaanranawat">
                      <li>
                        <FaGithub className="headerIcon" />
                      </li>
                    </a>
                  </div>
                  <div className="jello-horizontal3">
                    <a href="https://instagram.com/optimalcoding">
                      <li>
                        <FaInstagram className="headerIcon" />
                      </li>
                    </a>
                  </div>
                </ul>
                <h1 className="tracking-in-contract-bck-bottom">
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
                    Resume
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
