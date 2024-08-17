import React from "react";

const About = ({ about, image = "https://via.placeholder.com/215" }) => {
  return (
    <div>
      <aside>
        <img src={image} alt={"blog logo"} />
        <p>{about}</p>
      </aside>
    </div>
  );
};

export default About;