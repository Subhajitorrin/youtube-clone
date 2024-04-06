import React, { useRef, useEffect, useState } from "react";
import "./Search.css";
import { GetVideosBySearch } from "../API/GetVideosBySearch";
import { GetVideoById } from "../API/GetVideoById";
import SearchCard from "./SearchCard";
import data from "../API/data.json";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function Search({ searchData }) {
  const [videoList, setvideoList] = useState([]);
  const [completeVideoList, setcompleteVideoList] = useState([]);
  const [suggestedVideoList, setSuggestedVideoList] = useState([]);
  const [renderSuggestion, setrenderSuggestion] = useState(false);

  useEffect(() => {
    GetVideosBySearch(searchData).then((res) => {
      setvideoList(res.items);
    });
  }, [searchData]);

  useEffect(() => {
    Promise.all(videoList.map((video) => GetVideoById(video.id.videoId)))
      .then((responses) => {
        const updatedVideoList = responses.map((res, index) => ({
          ...videoList[index],
          statistics: res.items[0].statistics,
        }));
        setcompleteVideoList(updatedVideoList);
      })
      .catch((error) => {
        console.error("Error fetching video statistics:", error);
      });
  }, [videoList]);

  useEffect(() => {
    shuffleArray(data);
    setTimeout(() => {
      setrenderSuggestion(true)
      setSuggestedVideoList(data);
    }, 1000);
    // console.log(data[0]);
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

      {renderSuggestion ? (
        <div className="searchLineContainer">
          <div className="searchLine"></div>
          <h4>People also watched</h4>
        </div>
      ) : (
        <></>
      )}

      {
        // suggested videos
        suggestedVideoList.map((item, index) => {
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
        })
      }
    </div>
  );
}

export default Search;
