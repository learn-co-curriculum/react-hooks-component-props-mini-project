import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
    const articleLists = posts.map( (article) => {
        return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} time={article.minutes}/>
    })
    return (
        <main>
            {articleLists}
        </main>
    )
}

export default ArticleList
