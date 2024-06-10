import React from "react";

const About = ({image = "https://via.placeholder.com/215", about}) => {
  return (
    <>
    <img src={image} alt="blog logo"/>
    <p>{about}</p>
    </>
  )
}

export default About
