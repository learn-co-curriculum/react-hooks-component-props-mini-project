import React from 'react'

export default function About(props) {
  return (
    <div>
    <aside>
    <img src={props.imageUrl} alt="blog logo" />
    <p>{props.aboutText}</p>
  </aside>
  </div>
  )
}
