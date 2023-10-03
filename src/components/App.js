import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js";
import About from "./About.js";
import ArticleList from "./ArticleList";
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name ={blogData.name}/>
      <About image ={blogData.image} about ={blogData.about}/>
      <ArticleList articles={blogData.posts}/>

    </div>
  );
}

export default App;
