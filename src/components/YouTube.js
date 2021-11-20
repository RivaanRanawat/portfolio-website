import React, { useEffect, useState, useContext } from "react";
import "../App.css";
import { FaBook, FaMediumM, FaYoutube } from "react-icons/fa";
import axios from "axios";

export default function YouTube() {
  const [arr, setArr] = useState([]);
  const [isShowAllVideos, setIsShowAllVideos] = useState(false);

  // https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAIk4EsruO40NOKa7V-n14nKN1Eh1sHc64&channelId=UC-1kzHtwBY8n0TY5NhYxNaw&part=snippet,id&order=date&maxResults=10

  const url =
    "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAIk4EsruO40NOKa7V-n14nKN1Eh1sHc64&channelId=UC-1kzHtwBY8n0TY5NhYxNaw&part=snippet,id&order=date&maxResults=10";

  useEffect(() => {
    getAllTitle();
  }, []);

  const getAllTitle = () => {
    axios
      .get(url)
      .then((res) => {
        res.data.items.map((item) => {
            setArr((prev) => [...prev, {title: item.snippet.title, id: item.id.videoId}]);
        })
      })
      .catch((err) => console.error(`Error: ${err}`));
  };

  if (arr.length > 0) {
    return (
      <div className="services">
        <div className="container">
          <center>
            <div className="ytPage">
              <h1 className="mainHeader">Latest From YouTube</h1>
              <div className="commonBorder"></div>
            </div>
          </center>
          <div className="row bgMain">
            {!isShowAllVideos
              ? arr.slice(0, 6).map((item, idx) => {
                  return (
                    <div className="col-4 bgMain">
                      <a href={`https://www.youtube.com/watch?v=${item["id"]}`} target="_blank" rel="noopener">
                        <div className="services__box1">
                          <br></br>
                          <FaYoutube className="commonIcons" />
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
                          <FaYoutube className="commonIcons" />
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
            onClick={() => setIsShowAllVideos(!isShowAllVideos)}
          >
            <a className="btn btn-outline">
              {isShowAllVideos ? 'See Less':  'See More'}
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>No Blogs Written!</div>;
  }
}
