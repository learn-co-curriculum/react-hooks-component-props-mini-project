import React from 'react'
import Article from './Article'

function ArticleList( {articles} ) {
  const post = articles.map(singleArticle => {
      return (
          <Article key={singleArticle.id} singleArticle={singleArticle}/>
      )
  })
  
    return (
    <main>
        {post}
    </main>
  )
}

export default ArticleList