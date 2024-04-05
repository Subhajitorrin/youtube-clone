import React, { useState } from "react";
import "./Heading.css";
import { RiMenuLine } from "react-icons/ri";
import youtubelogo from "../assets/youtube.svg";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";
import { MdVideoCall } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

function Heading({toggleMenu,setToggleMenu,setsearchData}) {
  const [input,setInput]=useState("");
  function handelMenuClick(){
    setToggleMenu(!toggleMenu);
  }
  function handelSearch(){
    setsearchData(input);
  }
  return (
    <div className="headingContainer">
      <div className="left">
        <RiMenuLine className="menu" onClick={handelMenuClick}/>
        <Link to="/">
          <div className="logo">
            <img src={youtubelogo} />
            <h3>YouTube</h3>
            <p>IN</p>
          </div>
        </Link>
      </div>
      <div className="middle">
        <div className="search">
          <input type="search" className="searchInput" placeholder="Search" onChange={(e) => setInput(e.target.value)}/>
          <IoIosSearch className="searchIcon" onClick={handelSearch}/>
        </div>
        <div className="micContainer">
          <FaMicrophone className="mic" />
        </div>
      </div>
      <div className="right">
        <div className="iconContainer searchmini">
        <IoIosSearch className="" />
        </div>
        <div className="iconContainer">
          <MdVideoCall className="icon" />
        </div>
        <div className="iconContainer">
          <IoIosNotificationsOutline className="icon" />
        </div>
        <div className="user">
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/470/618/non_2x/anime-boy-avatar-ai-generative-art-photo.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Heading;
