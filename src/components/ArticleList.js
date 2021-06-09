import Article from "./Article"
import React from "react";


function ArticleList({posts}){
    // console.log(posts)
    const postArray = posts.map(post => 
        <Article 
        key={post.id} 
        title={post.title} 
        preview={post.preview}
        minutes={post.minutes} 
        date={post.date}
        /> )

    return (
        <main>
            {postArray}
        </main>

    )
}

//another way of doing the above

//function ArticleList({id, title, preview, minutes}){
    // console.log(post.about)
    // const postArray = post.map(el => 
    //     <ArticleList 
    //     key={id} 
    //     title={title} 
    //     preview={preview}
    //     minutes={minutes} /> )


// id: 1,
// title: "Components 101",
// date: "December 15, 2020",
// preview: "Setting up the building blocks of your site",
// minutes: 5,



export default ArticleList;