import React from 'react'
import './LineCard.css'

function LineCard({icon,text}) {
  return (
    <div className="linecardcontainer">
        <div className="linecardleft">
            <img src={icon} alt="" />
        </div>
        <div className="linecardright">
            <h5>{text}</h5>
        </div>
    </div>
  )
}

export default LineCard