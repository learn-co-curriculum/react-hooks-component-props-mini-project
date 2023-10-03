import React from "react";
import blogData from "../data/blog";

function About (){
    if (!blogData.image){blogData.image="https://via.placeholder.com/215"}
    return (
        <aside>
            <img src= {blogData.image} alt= {'blog logo'}></img>
            <p>{blogData.about}</p>
        </aside>
    )
}

export default About