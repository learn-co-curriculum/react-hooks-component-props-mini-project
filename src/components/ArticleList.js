const { default: Article } = require("./Article");



function ArticleList({posts}){
    const allPosts = posts.map((post => {
        return (
            <Article
                key= {post.id}
                title= {post.title}
                date= {post.date}
                preview= {post.preview}
            />
        )
    }))
    
    return (
        <main>{allPosts}</main>

    )
}

export default ArticleList