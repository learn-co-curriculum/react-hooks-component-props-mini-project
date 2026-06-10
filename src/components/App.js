import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
// import Article from "./Article";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name = "Underreacted"/>
      <About about= {blogData.about} />
      <ArticleList posts ={blogData.posts}/>
    </div>
  );
}

export default App;
