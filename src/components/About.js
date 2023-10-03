import React from "react";

function About(prop) {
    let hasImg = prop.image;
    return (
        <aside>
            {hasImg ? <img src={prop.image} alt="blog logo"></img> : <img src="https://via.placeholder.com/215" alt="blog logo"></img>}
            <p>{prop.about}</p>
        </aside>
    )
}

export default About;