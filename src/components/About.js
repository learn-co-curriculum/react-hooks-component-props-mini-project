import React from 'react';

const About = ({image ='https://via.placeholder.com/215', about}) => {
 
  return(
    <aside>
      <figure>
        <img src={image} alt="blog logo"/>
        <p>{about}</p>
      </figure>

    </aside>
  )
}
export default About;

