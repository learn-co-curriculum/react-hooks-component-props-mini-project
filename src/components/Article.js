import React from "react";
import TimeToRead from "./TimeToRead";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <TimeToRead minutes={minutes} />
    </article>
  )
}

export default Article
