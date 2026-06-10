import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Bonus: Minutes to Read Indicator
  const makeEmojis = (mins) => {
    let emojis = "";
    if (mins < 30) {
      const cups = Math.ceil(mins / 5);
      emojis = "☕️".repeat(cups);
    } else {
      const boxes = Math.ceil(mins / 10);
      emojis = "🍱".repeat(boxes);
    }
    return `${emojis} ${mins} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {makeEmojis(minutes)}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
