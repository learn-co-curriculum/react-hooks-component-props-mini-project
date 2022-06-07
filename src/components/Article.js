import React from 'react'

function Article( {singleArticle} ) {
    const {title , date ='January 1, 1970' , preview} = singleArticle
    return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </article>
  )
}

export default Article