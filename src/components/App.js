import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  console.log("blog data", blogData);
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About about={blogData.about} imgSrc={blogData.image} />
      <ArticleList articles={blogData.posts} />
    </div>
  );
}

export default App;
