import React from 'react'
import Article from "./Article"


const ArticleList = ({ posts }) => {
  const article = posts.map((post) => {
    return (
      <Article
        key={post.id}
        {...post}/>
    )
  })
  return (
    <main>{article}</main>
  )
}

export default ArticleList
