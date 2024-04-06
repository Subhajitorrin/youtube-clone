import React from "react";
import { useState, useEffect,useRef } from "react";
import { useParams } from "react-router-dom";
import "./Video.css";
import data from "../API/data.json";
import VideoSectionCard from "./VideoSectionCard";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function Video({right}) {
  const [suggestedVideoList, setSuggestedVideoList] = useState([]);
  const { id } = useParams();
  const videoContainer = useRef(null);

  useEffect(() => {
    shuffleArray(data);
    setSuggestedVideoList(data);
    console.log(data[0]);
  }, []);

  useEffect(() => {
    right.current.scrollTo(0, 0);
  }, [id]);
  

  return (
    <div className="VideoContainer" ref={videoContainer}>
      <div className="videoLeft">
        <iframe
          width="1280"
          height="725"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&si=AKl7E_SUcdTmUOLP`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="videoRight">
        {suggestedVideoList.map((item, index) => {
          const image = item.snippet.thumbnails.high.url;
          const title = item.snippet.title;
          const channel = item.snippet.channelTitle;
          const views = item.statistics.viewCount;
          const time = item.snippet.publishedAt;
          const id = item.id.videoId;
          return (
            <VideoSectionCard
              key={index}
              image={image}
              title={title}
              channel={channel}
              views={views}
              time={time}
              id={id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Video;
