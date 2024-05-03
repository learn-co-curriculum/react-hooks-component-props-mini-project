import React from 'react'

function Article({title, date = "January 1, 1970", preview, minutes}) {
    function TimeTaken ({minutes}) {
        if (minutes < 30) {
            let result = Math.ceil(minutes/5)
            const coffeeCup = "☕"
            let string = ""
            for (let i = 0 ; i < result ; i++) {
                string += coffeeCup 

            }
            const finalSentence = string + `${minutes} min read`
            return finalSentence
        } else {
            let result2 = Math.ceil (minutes/10)
            const icon = "🍱"
            let string2 = ""
            for (let i= 0 ; i < result2 ; i++) {
                string2 += icon
            }
            const finalSentence2 = string2 + `${minutes} min read`
            return finalSentence2
        }
        
        
    }
  return (
    <div>
        <article>
      <h3>{title}</h3>
      <small> {date} </small>
      <p>{preview} </p>
      <TimeTaken minutes={minutes} />
        </article>
    </div>
  )
}

export default Article