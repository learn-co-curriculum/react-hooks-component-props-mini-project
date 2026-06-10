import React from "react";

function Article({title, date = "January 1, 1970", preview}) {
  return (
    <article>
      <p>{preview}</p>
      <h3>{title}</h3>
      <small>{date}</small>
    </article>
  );
}

export default Article;
