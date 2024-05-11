import React from "react";
import Articles from "./Article";

function ArticleList({ posts }) {
  const articles = posts.map((post) => (
    <Articles
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
      minutes={post.minutes}
    />
  ));
  return <main>{articles}</main>;
}
export default ArticleList;