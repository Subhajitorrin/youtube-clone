import React, { useRef, useEffect, useState } from "react";
import "./Search.css";
import SearchCard from "./SearchCard";
import data from "../API/data.json";

function Search({ searchData }) {
  const [videoList, setvideoList] = useState([]);
  const [completeVideoList, setcompleteVideoList] = useState([]);

  useEffect(() => {
    setcompleteVideoList(data);
    console.log(data[0]);
  }, []);

  return (
    <div className="rightSearchContainer">
      {completeVideoList.map((item, index) => {
        const image = item.snippet.thumbnails.high.url;
        const title = item.snippet.title;
        const channel = item.snippet.channelTitle;
        const views = item.statistics.viewCount;
        const time = item.snippet.publishedAt;
        const desc = item.snippet.description;
        // console.log(item);
        return (
          <SearchCard
            key={index}
            image={image}
            title={title}
            channel={channel}
            views={views}
            time={time}
            desc={desc}
          />
        );
      })}
    </div>
  );
}

export default Search;