
//name came from App- as destructuring
function Header({name}){
return (
    <header>
        <h1>{name}</h1>
    </header>
  )
}


//todo- another way of doing it
// function Header(props){
//     return (
//         <header>
//             <h1>{props.name}</h1>
//         </header>
//       )
//     }








export default Header;  


