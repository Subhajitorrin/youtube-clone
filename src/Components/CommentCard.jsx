import React from "react";
import "./CommentCard.css";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

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

function CommentCard({ owner, time, text }) {
  return (
    <div className="commentCardContainer">
      <div className="owerNtime">
        <h4>{owner}</h4>
        <p>{timeAgo(time)}</p>
      </div>
      <p className="comtext">{text}</p>
      <div className="commenticons">
        <AiOutlineLike className="comicon" />
        <AiOutlineDislike className="comicon"/>
        <h4>Reply</h4>
      </div>
    </div>
  );
}

export default CommentCard;
