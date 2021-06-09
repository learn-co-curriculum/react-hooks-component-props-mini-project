

function Article({article, date ="January 1, 1970", preview, title}){
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>

        )
}




export default Article;