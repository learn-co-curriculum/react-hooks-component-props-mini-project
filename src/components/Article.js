import React from 'react'

const Article = ({date = "January 1, 1970", title, preview, minutes}) => {

return(
    <article>
      <h3>{title}</h3>
      <small>{date} min to read</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article
