import React from "react";
import Article from "./Article";

function ArticleList({ articles }) {
  return (
    <main>
      {articles?.map((item, index) => {
        return (
          <Article
            key={index}
            title={item.title}
            date={item.date}
            preview={item.preview}
          />
        );
      })}
    </main>
  );
}

export default ArticleList;
