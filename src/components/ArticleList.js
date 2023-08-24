import Article from "./Article"

const ArticleList = ({ blogData }) => {
  const blogDataPosts = blogData.posts
  const articles = blogDataPosts.map(post => {
    return <Article key={post.id} post={post}  />

  })

  return (
    <main>{articles}</main>
  );
}
export default ArticleList
