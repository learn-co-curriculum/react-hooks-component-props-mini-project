import React from "react";
import blogData from "../data/blog";

// function About(prop) {
//     let hasImg = prop.image;
//     return (
//         <aside>
//             {hasImg ? <img src={prop.image} alt="blog logo"></img> : <img src="https://via.placeholder.com/215" alt="blog logo"></img>}
//             <p>{prop.about}</p>

function About (){
    if (!blogData.image){blogData.image="https://via.placeholder.com/215"}
    return (
        <aside>
            <img src= {blogData.image} alt= {'blog logo'}></img>
            <p>{blogData.about}</p>
        </aside>
    )
}

export default About;
