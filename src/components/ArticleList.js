import React from "react";
import Article from "./Article";

function ArticleList({posts}) {

//console.log(posts)

    const blogPoster = posts.map((post) => (
        <Article
        key = {post.id}
        title ={post.title}
        date = {post.date}
        preview = {post.preview}
        minutes = {post.minutes}
        />
    ))
//console.log(blogPoster)

      return (<main>{blogPoster}</main>)
}


export default ArticleList;

