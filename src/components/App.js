import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Mike's Page" />
      <About image="https://upload.wikimedia.org/wikipedia/en/7/7b/MaxheadroomMpegMan.jpg" />
    </div>
  );
}

export default App;
