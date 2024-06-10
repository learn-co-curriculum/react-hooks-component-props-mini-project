import React from "react";

const imageDefault = "https://via.placeholder.com/215"

function About ({image = imageDefault, about}){
  return (
    <aside>
      <img src={image} alt="blog logo"></img>
      <p>{about}</p>
    </aside>
  )
}

export default About
