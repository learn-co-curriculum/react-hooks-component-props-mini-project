import React from "react";
import About from "./About";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";

function App() {
  return (
    <>
      <header>{blogData.name}</header>
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts}/>
    </>
    
  );
}

export default App;
