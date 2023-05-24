import React from "react";


function Article({title, date = "January 1, 1970", preview,}) {
    return(
    <article> 
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </article>
    )

}
export default Article;

// id: 1,
// title: "Components 101",
// date: "December 15, 2020",
// preview: "Setting up the building blocks of your site",
// minutes: 5,