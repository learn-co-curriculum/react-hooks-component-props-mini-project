import React from "react";

function getMinutesDisplay(minutesToRead) {
  if (minutesToRead < 30) {
    const cups = Math.ceil(minutesToRead / 5);
    return "☕️".repeat(cups) + ` ${minutesToRead} min read`;
  } else {
    const boxes = Math.ceil(minutesToRead / 10);
    return "🍱".repeat(boxes) + ` ${minutesToRead} min read`;
  }
}

function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;