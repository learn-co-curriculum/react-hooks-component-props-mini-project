import React from "react";
import Article from '../components/Article.js'

const ArticleList = ({ posts }) => {
   const createArticles = posts.map(post => {
      return(
        <Article
          key={ post.id }
          title={ post.title}
          date={ post.date }
          preview={ post.preview }
        />
      )
    })
    return(
      <main>
        { createArticles }
      </main>
    )
}

export default ArticleList
