

function Article(props){
    return (
        <article>
            <h3>{props.title}</h3>
            <small default="January 1, 1970">{props.date}</small>
            <p>{props.preview}</p>
        </article>


    )



}

export default Article