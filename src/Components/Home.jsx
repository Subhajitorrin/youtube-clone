import React, { useRef, useEffect, useState } from "react";
import "./Home.css";
import Card from "./Card";
import homeicon from "../assets/home.svg";
import shortsicon from "../assets/shorts.svg";
import subscritionicon from "../assets/subscription.svg";
import you from "../assets/you.svg";
import LineCard from "./LineCard";
import Line from "./Line";
import history from "../assets/history.svg";
import playlist from "../assets/playlists.svg";
import yourvideos from "../assets/yourvideos.svg";
import watchlater from "../assets/watchlater.svg";
import likedvideos from "../assets/likedvideos.svg";
import trending from "../assets/trending.svg";
import shopping from "../assets/shopping.svg";
import music from "../assets/music.svg";
import movies from "../assets/movies.svg";
import live from "../assets/live.svg";
import gaming from "../assets/gaming.svg";
import news from "../assets/news.svg";
import sports from "../assets/sports.svg";
import courses from "../assets/courses.svg";
import fashion from "../assets/fashion.svg";
import podcasts from "../assets/podcasts.svg";
import ytpremium from "../assets/ytpremium.svg";
import ytstudio from "../assets/ytstudio.svg";
import ytmusic from "../assets/ytmusic.svg";
import ytkids from "../assets/ytkids.svg";
import setting from "../assets/setting.svg";
import report from "../assets/report.svg";
import help from "../assets/help.svg";
import send from "../assets/send.svg";
import {GetVideosBySearch} from "../API/GetVideosBySearch"

const set5 = [
  { icon: setting, text: "Setting" },
  { icon: report, text: "Report History" },
  { icon: help, text: "Help" },
  { icon: send, text: "Send feedback" },
];
const set4 = [
  { icon: ytpremium, text: "YouTube Premium" },
  { icon: ytstudio, text: "YouTube Studio" },
  { icon: ytmusic, text: "YouTube Music" },
  { icon: ytkids, text: "YouTube Kids" },
];
const set3 = [
  { icon: trending, text: "Trending" },
  { icon: shopping, text: "Shopping" },
  { icon: music, text: "Music" },
  { icon: movies, text: "Movies" },
  { icon: live, text: "Live" },
  { icon: gaming, text: "Gaming" },
  { icon: news, text: "News" },
  { icon: sports, text: "Sports" },
  { icon: courses, text: "Courses" },
  { icon: fashion, text: "Fashion" },
  { icon: podcasts, text: "Podcasts" },
];
const set1 = [
  { icon: homeicon, text: "Home" },
  { icon: shortsicon, text: "Shorts" },
  { icon: subscritionicon, text: "Subscriptions" },
];
const set2 = [
  { icon: subscritionicon, text: "Your channel" },
  { icon: history, text: "History" },
  { icon: playlist, text: "Playlist" },
  { icon: yourvideos, text: "Your videos" },
  { icon: watchlater, text: "Watch later" },
  { icon: likedvideos, text: "Liked videos" },
];

function Home({ toggleMenu,searchData }) {
  const sidebar = useRef(null);
  const hiddensidebar = useRef(null);

  const cards = [];
  for (let i = 0; i < 100; i++) {
    cards.push(i);
  }

  function homeleft() {
    if (toggleMenu) {
      sidebar.current.style.display = "block";
      hiddensidebar.current.style.display = "none";
    } else {
      sidebar.current.style.display = "none";
      hiddensidebar.current.style.display = "block";
    }
  }

  useEffect(() => {
    homeleft();
  }, [toggleMenu]);

  // -------------------------------------API WORKINGS------------------------------------- //
const [videoList,setvideoList]=useState([]);

  useEffect(() => {
    GetVideosBySearch(searchData).then((res)=>{
      setvideoList(res.items)
    })
  }, [searchData])
  
  
  // -------------------------------------API WORKINGS------------------------------------- //
  return (
    <div className="homeContainer">
      <div className="hiddenleft active" ref={hiddensidebar}>
        <div className="sidebarIconContainer">
          <img src={homeicon} alt="" />
          <p>Home</p>
        </div>
        <div className="sidebarIconContainer">
          <img src={shortsicon} alt="" />
          <p>Shorts</p>
        </div>
        <div className="sidebarIconContainer">
          <img src={subscritionicon} alt="" />
          <p>Subscriptions</p>
        </div>
        <div className="sidebarIconContainer">
          <img src={you} alt="" />
          <p>You</p>
        </div>
      </div>
      <div className="homeleft" ref={sidebar}>
        {/* set1 */}
        {set1.map((item, index) => {
          return <LineCard key={index} icon={item.icon} text={item.text} />;
        })}

        <Line />
        {/* set2 */}
        <h4 style={{ marginLeft: "22px", marginBottom: "10px" }}>You</h4>
        {set2.map((item, index) => {
          return <LineCard key={index} icon={item.icon} text={item.text} />;
        })}

        <Line />
        {/* set3 */}
        <h4 style={{ marginLeft: "22px", marginBottom: "10px" }}>Explore</h4>
        {set3.map((item, index) => {
          return <LineCard key={index} icon={item.icon} text={item.text} />;
        })}
        <Line />
        {/* set4 */}
        <h4 style={{ marginLeft: "22px", marginBottom: "10px" }}>
          More from YouTube
        </h4>
        {set4.map((item, index) => {
          return <LineCard key={index} icon={item.icon} text={item.text} />;
        })}
        <Line />
        {/* set5 */}
        {set5.map((item, index) => {
          return <LineCard key={index} icon={item.icon} text={item.text} />;
        })}
      </div>
      <div className="homeright">
        {
          videoList.map((item,index)=>{
            const image = item.snippet.thumbnails.high.url;
            const title = item.snippet.title;
            return <Card image={image} title={title}/>
          })
        }
      </div>
    </div>
  );
}

export default Home;
