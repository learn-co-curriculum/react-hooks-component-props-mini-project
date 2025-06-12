import React from "react"
import blogData from "../data/blog"
import Header from "./Header"

console.log(blogData)

function App() {
  const {name} = blogData
  return (
    <div className="App">
      <Header name={name} />
    </div>
  )
}

export default App
