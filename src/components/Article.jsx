import React from "react";

const Article = ({post:{title, date = "January 1, 1970", preview, minutes}}) => {
  
  const CoffeeCups = () => {
    const coffeeCups = (Math.round(minutes / 5 ) * 5) / 5
    const cups = []
    for(let i = 1; i <= coffeeCups; i++){
      cups.push(<span key={i}>☕️</span>)
    }
    cups.push(<span key={'min'}> {minutes} min to read</span>)
    return cups
  }

  const BentoBox = () => {
    const bentoBoxes = (Math.round(minutes / 10 ) * 10) / 10
    const boxes = []
    for(let i = 1; i <= bentoBoxes; i++){
      boxes.push(<span key={i}>🍱</span>)
    }
    boxes.push(<span key={'min'}> {minutes} min to read</span>)
    return boxes
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {minutes < 30 ? <CoffeeCups/> : <BentoBox/>}
    </article>
)}

export default Article
