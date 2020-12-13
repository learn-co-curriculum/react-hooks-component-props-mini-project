import React from "react";
import blogData from "../data/blog";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <About image={blogData.image} about={blogData.about} />
    </div>
  );
}

export default App;
