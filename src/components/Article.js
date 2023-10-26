import React from 'react';


function Article(props) {
  const { title, date, preview } = props;
  const formattedDate = date || "January 1, 1970";
  const defaultImageUrl = "https://via.placeholder.com/215";
  return (
    <div>
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <img src={defaultImageUrl} alt="Article Image" />
      <p>{preview}</p>
    </article>
    </div>
  );
}

export default Article;

  
 
  
  
  
  
  
  
  