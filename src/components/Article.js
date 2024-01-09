
const addEmojis = (minutes) => {

  let emojis = ''
  if(minutes < 30){
    for(let i = 0; i<minutes; i+=5){
      emojis = emojis + "☕️"
    }
  }else{
    for(let i = 0; i<minutes; i+=10){
      emojis = emojis + "🍱"
    }
  }


  return emojis

}

const Article = ({ post }) => {
  const{ title, date = 'January 1, 1970', preview, minutes } = post




  return (
    <>
    <h3>{title}</h3>
    <small>{date}| {addEmojis(minutes)} {minutes} mins read</small>
    <p>{preview}</p>
    </>

  );
}

export default Article
