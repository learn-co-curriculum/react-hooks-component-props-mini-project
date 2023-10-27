import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post, index) => (
        <Article
          key={index} // Use a unique key for each Article
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
      
    </main>
  );
}

export default ArticleList;
