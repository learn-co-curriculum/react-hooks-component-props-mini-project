import React from "react";

function Article({ title, date="January 1, 1970", preview, minutes }) {
  let time = ""
  if(minutes < 30) {
    for(let i=0;i<Math.ceil(minutes / 5);i++) {
      time += "☕"
    }
  } else {
    for(let i=0;i<Math.ceil(minutes / 10);i++) {
      time += "🍱"
    }
  }
  return (
    <article>
      <h3>{title}</h3>
      <small>{`${date} • ${time} ${minutes} min read`}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article;