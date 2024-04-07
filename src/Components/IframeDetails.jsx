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

function IframeDetails({ id }) {
  const [videoDetails, setVideoDetails] = useState([]);
  useEffect(() => {
    // GetVideoDetailsSnippetStatistics(id).then((res)=>{
    //   setVideoDetails(res.items);
    // })
    setVideoDetails(iframedata);
  }, []);

  // useEffect(() => {
  //   console.log(videoDetails[0].snippet.title);
  // }, [videoDetails]);

  return (
    <div className="ifreamdetailscontainer">
      <div className="titleContainer">
        <h3>Titile</h3>
      </div>
      <div className="channelContainer">
        <div className="channelleft">
          <div>
            <h5 className="channelname">Channel Name</h5>
            <p className="subscount">2.32k subscribers</p>
          </div>
          <div className="subscribe">
            <p>Subscribe</p>
          </div>
        </div>
        <div className="channelright">
          <div className="likeNdislike">
            <div className="like">
              <BiLike />
              <p>15K</p>
            </div>
            <div className="verticalline"></div>
            <div className="dislike">
              <BiDislike />
            </div>
          </div>
          <div className="share">
            <PiShareFat />
            <h5>Share</h5>
          </div>
          <div className="download">
            <RiDownloadLine />
            <h5>Download</h5>
          </div>
          <div className="save">
            <RiMenuAddFill />
            <h5>Save</h5>
          </div>
          <div className="menu">
            <BsThreeDots />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IframeDetails;
