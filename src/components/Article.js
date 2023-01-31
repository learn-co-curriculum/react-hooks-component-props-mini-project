import React from 'react';

const Article = ({title, date ='January 1, 1970', preview, minutes }) => {

  let minuteEmojis = ''
  if(minutes < 30){
    let roundedMins = Math.ceil(minutes/5)
    minuteEmojis = "☕️".repeat(roundedMins)

  } else {
    let roundedMins = Math.ceil(minutes/10)
    minuteEmojis = "🍱".repeat(roundedMins)
  }
  return(
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{minuteEmojis}</p>
    </article>

  )
}
export default Article;
