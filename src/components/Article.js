function Article({
  title,
  date = "January 1, 1970",
  preview,
  minutes
}) {
  const readTime =
    minutes < 30
      ? `${"☕️".repeat(Math.ceil(minutes / 5))} ${minutes} min read`
      : `${"🍱".repeat(Math.ceil(minutes / 10))} ${minutes} min read`;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{readTime}</p>
      <p>{preview}</p>
    </article>
  );
}
export default Article;