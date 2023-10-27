import React from "react";

export default function Article({ title, date,details }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{details}</p>
    </article>
  );
}