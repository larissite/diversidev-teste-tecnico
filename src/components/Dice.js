import React from "react";
import "../css/DiceStyle.css"

export default function Dice({face, rolling}) {

    return (
      <i className={`dice fa-solid fa-dice-${face} ${rolling && "dice-shaking"}`}></i>
    )
    
  }