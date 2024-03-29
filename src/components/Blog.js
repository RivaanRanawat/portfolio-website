import React, { useEffect, useState, useContext } from "react";
import "../App.css";
import Fade from "react-reveal/Fade";
import { FaBook, FaMediumM } from "react-icons/fa";
import axios from "axios";

export default function Blog() {
  const [arr, setArr] = useState([]);
  const [isShowAllBlogs, setIsShowAllBlogs] = useState(false);
  const url =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@namanrivaan";

  useEffect(() => {
    getAllTitle();
  }, []);

  const getAllTitle = () => {
    axios
      .get(url)
      .then((res) => {
        const allData = res.data.items;
        setArr(allData);
        console.log(allData);
      })
      .catch((err) => console.error(`Error: ${err}`));
  };

  if (arr.length > 0) {
    return (
      <div className="services">
        <div className="container">
          <center>
            <div className="blogPage">
              <h1 className="mainHeader">Latest From Medium</h1>
              <div className="commonBorder"></div>
            </div>
          </center>
          <div className="row bgMain">
            {!isShowAllBlogs
              ? arr.slice(0, 6).map((item, idx) => {
                  return (
                    <div className="col-4 bgMain">
                      <a href={arr[idx]["link"]} target="_blank" rel="noopener">
                        <div className="services__box1">
                          <br></br>
                          <FaMediumM className="commonIcons" />
                          <div className="services__box-header">
                            {item["title"]}
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })
              : arr.map((item, idx) => {
                  return (
                    <div className="col-4 bgMain">
                      <a href={arr[idx]["link"]} target="_blank" rel="noopener">
                        <div className="services__box1">
                          <br></br>
                          <FaMediumM className="commonIcons" />
                          <div className="services__box-header">
                            {item["title"]}
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
          </div>
          <div
            className="price__btn"
            style={{ display: "flex", justifyContent: "center" }}
            onClick={() => setIsShowAllBlogs(!isShowAllBlogs)}
          >
            <a className="btn btn-outline">
              {isShowAllBlogs ? 'Read Less':  'Read More'}
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>No Blogs Written!</div>;
  }
}
