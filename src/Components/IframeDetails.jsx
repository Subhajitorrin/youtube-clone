import React, { useEffect, useState } from "react";
import "./IframeDetails.css";
import { GetVideoDetailsSnippetStatistics } from "../API/GetVideoDetailsSnippetStatistics";
import iframedata from "../API/iframedata.json";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { RiDownloadLine } from "react-icons/ri";
import { RiMenuAddFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";


function formatNumber(num) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "B";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num;
}

function timeAgo(timestamp) {
  const currentDate = new Date();
  const pastDate = new Date(timestamp);
  const timeDifference = currentDate.getTime() - pastDate.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return years === 1 ? "1 year ago" : years + " years ago";
  } else if (months > 0) {
    return months === 1 ? "1 month ago" : months + " months ago";
  } else if (weeks > 0) {
    return weeks === 1 ? "1 week ago" : weeks + " weeks ago";
  } else if (days > 0) {
    return days === 1 ? "1 day ago" : days + " days ago";
  } else if (hours > 0) {
    return hours === 1 ? "1 hour ago" : hours + " hours ago";
  } else if (minutes > 0) {
    return minutes === 1 ? "1 minute ago" : minutes + " minutes ago";
  } else {
    return "Just now";
  }
}

function IframeDetails({ id }) {
  const [videoDetails, setVideoDetails] = useState([]);
  useEffect(() => {
    // GetVideoDetailsSnippetStatistics(id).then((res)=>{
    //   setVideoDetails(res.items);
    // })
    setVideoDetails(iframedata);
  }, []);

  useEffect(() => {
    console.log();
  }, [videoDetails]);

  return (
    <div className="ifreamdetailscontainer">
      <div className="titleContainer">
        <h3>{videoDetails[0].snippet.title}</h3>
      </div>
      <div className="channelContainer">
        <div className="channelleft">
          <div>
            <h5 className="channelname">{videoDetails[0].snippet.channelTitle}</h5>
            <p className="subscount">2.32k subscribers</p>
          </div>
          <div className="subscribe">
            <p>Subscribe</p>
          </div>
        </div>
        <div className="channelright">
          <div className="likeNdislike">
            <div className="like">
              <BiLike className="likeicon" />
              <p>{formatNumber(videoDetails[0].statistics.likeCount)}</p>
            </div>
            <div className="verticalline"></div>
            <div className="dislike">
              <BiDislike className="likeicon" />
            </div>
          </div>
          <div className="share">
            <PiShareFat className="likeicon" />
            <h5>Share</h5>
          </div>
          <div className="download">
            <RiDownloadLine className="likeicon" />
            <h5>Download</h5>
          </div>
          <div className="save">
            <RiMenuAddFill className="likeicon" />
            <h5>Save</h5>
          </div>
          <div className="menuiframe">
            <BsThreeDots />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IframeDetails;
