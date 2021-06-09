//use this placeholder image as a default value for the prop if no prop is passed in: "https://via.placeholder.com/215
// function About({image = "https://via.placeholder.com/215"})


function About({image = "https://via.placeholder.com/215", about}){
    return (
        <aside>
            <img src={image} alt= "blog logo" />
            <p>{about}</p>
         </aside>
  )
}




export default About;