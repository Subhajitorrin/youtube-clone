import React from "react";
import "./SearchCard.css";
import { useState, useEffect } from "react";

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

function SearchCard({ image, title, channel, views, time, desc }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`searchCardContainer ${isMobile ? "mobile" : "desktop"}`}>
      <div className="searchCardLeft">
        <img src={image} alt="" className="img" />
      </div>
      <div className="searchCardRight">
        {isMobile ? (
          <div>
            <h4 className="title">{title.slice(0, 60)}</h4>
            <div className="viewnday">
              <p className="channelname">{channel}</p>
              <p>{formatNumber(views)}</p>
              <p>{timeAgo(time)}</p>
            </div>
          </div>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div>
              <h4 className="title">{title.slice(0, 60)}</h4>
              <div className="viewnday">
                <p>{formatNumber(views)}</p>
                <p>{timeAgo(time)}</p>
              </div>
            </div>
            <p className="channelname">{channel}</p>
            <p className="desv">{desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchCard;
