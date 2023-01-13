import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <About image = {blogData.image} about = {blogData.about} />
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
