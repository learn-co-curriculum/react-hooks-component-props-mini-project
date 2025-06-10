import React from "react";

function TimeToRead({ minutes }) {
  const appendEmojis = (minutes) => {
    if (minutes >= 30) {
      let bentos = "🍱🍱";
      const roundedMins = Math.ceil(minutes / 10) * 10;
      for (let i = 30; i <= roundedMins; i += 10) {
        bentos += "🍱"
      }
      return bentos;
    } else {
      let coffees = "";
      const roundedMins = Math.ceil(minutes / 5) * 5;
      for (let i = 5; i <= roundedMins; i += 5) {
        coffees += "☕️"
      }
      return coffees;
    }
  }

  const emojis = appendEmojis(minutes)
  
  return (
  <small>{emojis} {minutes} min read</small>
 )
}

export default TimeToRead
