import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"
import Article from "./Article"


// console.log(blogData);


function App() {
  console.log(blogData.posts);

  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
