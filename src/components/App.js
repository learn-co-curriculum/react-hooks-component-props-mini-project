import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Articlelist from "./Articlelist";

console.log(blogData);

function App() {
  const name = 'Overreacted'
  const articles = [
    {
      title: "The Wet Codebase",
      date: "July 13,2020 1 min read",
      details: "Come Waste your time with me",
    },
    {
      title: "Goodbye,Clean Code",
      date: "July 11,2020 5 min read",
      details: "Come Waste your time with me",
    },
    {
      title: "My Decade in Review",
      date: "January 1,2020 26 min read",
      details: "A personal reflection",
    }
  ];
  const aboutText =
    "Personal blog by Shadrack Bett. I explain this words with code.";
  return (
    <div className="App">
      <Header name={name}/>
      <About aboutText={aboutText} />
      <Articlelist posts={articles} />
    </div>
  );
}

export default App;
