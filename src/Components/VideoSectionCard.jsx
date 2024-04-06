import React from 'react'
import "./VideoSectionCard.css"

function VideoSectionCard({image,title,channel,views,time,id}) {
  return (
    <div className="videoCardContainer">
      <div className="videoCardLeft">
        <img src={image} alt="" />
      </div>
      <div className="videoCardRight">
        <h4>{title.slice(0,55)}</h4>
      </div>
    </div>
  )
}

export default VideoSectionCard