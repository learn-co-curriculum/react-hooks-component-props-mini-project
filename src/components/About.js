import React from "react";

const About = ({ about, blogImage = "https://via.placeholder.com/215" }) => {
  return (
    <>
      <aside>
        <img src={blogImage} alt="blog logo" />
        <p>{about}</p>
      </aside>
    </>
  );
};

export default About;
