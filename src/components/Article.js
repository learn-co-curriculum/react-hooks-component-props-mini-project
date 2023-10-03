function Article({title, date="January 1, 1970", preview}) {
    return (
        <>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </>
    )
}

export default Article
