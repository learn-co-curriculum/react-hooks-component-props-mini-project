import Article from "./Article"

function ArticleList({articles}) {
    const articleList = articles.map((article) => {
        return <Article key={article.id} title={article.title} date={article.date} preview={article.preview}/>
    })

    return (
        <ul>
            {articleList}
        </ul>
    )
}

export default ArticleList