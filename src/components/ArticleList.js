import React from 'react';
import Article from './Article';

const ArticleList = ({posts}) =>{
  console.log(posts)
  return(
    <main>
      {posts.map(post =>{
        return <Article key={post.id} {... post}/>
      })
    }
   </main>
  );
}



export default ArticleList

{/* <ol>
{reptiles.map((reptile) => (
  <li>{reptile}</li>
))}
</ol> */}
