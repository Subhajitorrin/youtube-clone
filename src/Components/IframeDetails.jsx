import React, { useEffect, useState, useRef } from "react";
import "./IframeDetails.css";
import { GetVideoDetailsSnippetStatistics } from "../API/GetVideoDetailsSnippetStatistics";
import iframedata from "../API/iframedata.json";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { RiDownloadLine } from "react-icons/ri";
import { RiMenuAddFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { GetChannelDetail } from "../API/GetChannelDetail";

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
  const [videoDetails, setVideoDetails] = useState({});
  const [title, setTitle] = useState("");
  const [channelname, setChannelName] = useState("");
  const [like, setLike] = useState(0);
  const [channelId, setChannelId] = useState("");
  const [sub, setSub] = useState();
  const [views, setviews] = useState(0);
  const [time, settime] = useState(0);
  const [desc, setdesc] = useState("");
  const descX = useRef(null);
  const seeless = useRef(null);

  useEffect(() => {
    GetVideoDetailsSnippetStatistics(id).then((res) => {
      const data = res.items;
      console.log();
      setChannelId(data[0].snippet.channelId);
      setVideoDetails(data[0]);
      setTitle(data[0].snippet.title);
      setChannelName(data[0].snippet.channelTitle);
      setLike(formatNumber(data[0].statistics.likeCount));
      settime(data[0].snippet.publishedAt);
      setviews(data[0].statistics.viewCount);
      setdesc(data[0].snippet.description);
    });
  }, [id]);
  useEffect(() => {
    if (channelId) {
      GetChannelDetail(channelId).then((res) => {
        const data = res.items[0];
        setSub(data.statistics.subscriberCount);
      });
    }
  }, [channelId]);

  const renderDescription = () => {
    return desc.split("\n").map((line, index) => {
      return <p key={index}>{line}</p>;
    });
  };

  function handelDesc() {
    if (descX.current.classList.contains("descActive")) {
      descX.current.classList.remove("descActive");
    }
  }

  function handelSeeless(event) {
    event.stopPropagation();
    descX.current.classList.add("descActive");
  }

  return (
    <div className="ifreamdetailscontainer">
      <div className="titleContainer">
        <h3>{title}</h3>
      </div>
      <div className="channelContainer">
        <div className="channelleft">
          <div>
            <h5 className="channelname">{channelname}</h5>
            {/* Assuming subscount is available in iframedata */}
            <p className="subscount">{formatNumber(sub)} subscribers</p>
          </div>
          <div className="subscribe">
            <p>Subscribe</p>
          </div>
        </div>
        <div className="channelright">
          <div className="likeNdislike">
            <div className="like">
              <BiLike className="likeicon" />
              <p>{like}</p>
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
      <div className="description descActive" ref={descX} onClick={handelDesc}>
        <div className="viewNduration">
          <h4>
            {formatNumber(views)} views {timeAgo(time)}
          </h4>
          <div className="desc">{renderDescription()}</div>
        </div>
        <div onClick={handelSeeless}>
          <h5>Show less</h5>
        </div>
      </div>
      <div className="supportDesc"></div>
    </div>
  );
}

export default IframeDetails;
