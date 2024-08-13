import React from "react";

const Article = ({ title, date = "January 1, 1970", preview, minutes }) => {
  const getEmojiDisplay = (minutes) => {
    let emojiText = "";

    if (minutes < 30) {
      // Coffee cup emoji
      const coffeeEmojis = Math.ceil(minutes / 5);
      emojiText = "☕️".repeat(coffeeEmojis);
    } else {
      // Bento box emoji
      const bentoEmojis = Math.ceil(minutes / 10);
      emojiText = "🍱".repeat(bentoEmojis);
    }

    return `${emojiText} ${minutes} min read`;
  };
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{getEmojiDisplay(minutes)}</p>
    </article>
  );
};

export default Article;