import React from 'react'
import './Card.css'

function Card({image,title}) {
  return (
    <div className="cardContainer">
        <div className="cardtop">
          <img src={image} alt="" />
        </div>
        <div className="cardbottom">
          <h4>{title}</h4>
        </div>
    </div>
  )
}

export default Card