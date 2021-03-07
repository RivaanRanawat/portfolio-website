import React from "react";
import { DarkToggle } from "./DarkToggle";

const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <DarkToggle />
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <btn
                  onClick={() => {
                    let destination = document.querySelector(".app");
                    destination.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Home
                </btn>
              </li>
              <li>
                <btn
                  onClick={() => {
                    let destination = document.querySelector(".about");
                    destination.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  About
                </btn>
              </li>
              <li>
                <btn
                  onClick={() => {
                    let destination = document.querySelector(".skills");
                    destination.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Skills
                </btn>
              </li>
              <li>
                <btn
                  onClick={() => {
                    let destination = document.querySelector(".services");
                    destination.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Projects
                </btn>
              </li>
              <li>
                <btn>Blog</btn>
              </li>
              <li>
                <btn
                  onClick={() => {
                    let destination = document.querySelector(".contact1");
                    destination.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Contact
                </btn>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div> */}
    </nav>
  );
};

export default Nav;
