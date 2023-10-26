import React from 'react'

export default function ArticleList(props) {
  return (
    <div>
        <article>
    <h3>{props.title}</h3>
    <small>{props.date || "January 1, 1970"}</small>
    <p>{props.preview}</p>
  </article>
  </div>
  )
}


  