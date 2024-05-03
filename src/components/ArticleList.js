import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
    const ArticleArray = posts.map ((post)=> {
        return (
            <Article title = {post.title} date = {post.date} preview = {post.preview}
            minutes = {post.minutes} key = {post.id}/>
        )
    })
  return (
    <div>
        <main>
    {ArticleArray}
        </main>
    </div>
  )
}

export default ArticleList