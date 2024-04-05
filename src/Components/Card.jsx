import React from "react";
import "./Card.css";

function Card({ image, title, channel, views,time }) {
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
  return (
    <div className="cardContainer">
      <div className="cardtop">
        <img src={image} alt="" />
      </div>
      <div className="cardbottom">
        <h4>{title.slice(0, 60)}</h4>
        <p>{channel}</p>
        <div className="viewnday">
          <p>{formatNumber(views)}</p>
          <p>{timeAgo(time)}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
