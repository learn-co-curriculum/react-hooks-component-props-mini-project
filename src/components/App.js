import React from "react";
import blogData from "../data/blog";
import Header from "./Header";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name = {blogData.name}/>
      <About image = "https://via.placeholder.com/215"
      alt = "blog logo"
      about = {blogData.about}

       
      
      
      />
    </div>
  );
}

export default App;
