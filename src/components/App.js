import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";


console.log(blogData);


function App() {

  const blogName = "My Awesome Blog";
  const imageUrl = 'path-to-your-image.jpg';
  const aboutText = 'Welcome to our blog. We share interesting stories and insights with you.';
  const articles = [
    {
      title: 'First Article',
      date: 'October 26, 2023',
      preview: 'This is the preview of the first article.',
    },
    {
      title: 'Second Article',
      date: 'October 27, 2023',
      preview: 'This is the preview of the second article.',
    }
  ]
  

  return (
    <div className="App">
     
      <Header blogName= {blogName} />
      <About imageUrl={imageUrl} aboutText={aboutText} />
      <ArticleList articles={articles} />
      <Article />
      
      </div>
    
    
  );
  
}

export default App;
