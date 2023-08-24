const Article = ({post}) => {
  const{ title, date = 'January 1, 1970', preview } = post

  return (
    <>
    <h3>{title}</h3>
    <small>{date}</small>
    <p>{preview}</p>
    </>

  );
}

export default Article
