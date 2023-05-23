import React from "react";

function About ({image = "https://via.placeholder.com/215", alt, about}){

    console.log(image)
    console.log(alt)
    console.log(about)

    return(
        <aside>
            <img src={image}/>
        </aside>

    );


}

export default About;