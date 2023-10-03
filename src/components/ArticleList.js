import React from "react";
import blogData from "../data/blog";

function ArticleList() {
    // const least = blogData.posts.map(element => {
    //     return (<article key={element.id}> {element} </article>)
    // })

    console.log(blogData.posts)
    return (
        <main>
            {
                blogData.posts.map((element) => {
                    return (<article key={element.id} posts={element}> </article>)
                })
            }
            <p>awdlkawndlanwlfanw</p>            
        </main>
    )
}

export default ArticleList;