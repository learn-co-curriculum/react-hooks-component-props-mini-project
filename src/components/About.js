import React from "react";

function About({ imgSrc, about }) {
  return (
    <aside>
      <img src={imgSrc || "https://via.placeholder.com/215"} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}
export default About;
