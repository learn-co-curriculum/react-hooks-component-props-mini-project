import React from "react"



function Article({title, date ='January 1, 1970', preview, minutes}) {
  return (
    <>
    <article>
      <h3>{title}</h3>
      <small>{date} {minutes} min read</small>
      {/* <small>{minutes} min read</small> */}
      <p>{preview}</p>
    </article>
    </>
  )
}



export default Article
