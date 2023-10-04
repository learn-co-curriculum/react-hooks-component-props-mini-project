import React from "react";

function About( {image = "https://via.placeholder.com/215", about} ) {

    // ternary
        // let hasImg = prop.image;
        // {hasImg ? <img src={prop.image} alt="blog logo"></img> : <img src="https://via.placeholder.com/215" alt="blog logo"></img>}

    return(
        <aside>
            <img src={image} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    )
}

/* pair lab 

function About (){
    if (!blogData.image){blogData.image="https://via.placeholder.com/215"}
    return (
        <aside>
            <img src= {blogData.image} alt= {'blog logo'}></img>
            <p>{blogData.about}</p>
        </aside>
    )
}
*/

export default About;
