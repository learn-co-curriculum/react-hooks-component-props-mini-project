import React from 'react'

function About({about,image = "https://via.placeholder.com/215 "}) {
  return (
    <div>
        <aside> 
            <img src = {image} alt = "blog logo"></img>
        <p>
            {about}
        </p>
        </aside>
    </div>
  )
}

export default About