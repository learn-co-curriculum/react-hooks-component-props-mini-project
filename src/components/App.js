import React from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      <Header name={blogData.name}/>
      <About image={blogData.image}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
