import React from "react";

function Header(prop) {
    
    // console.log(prop)

    return(
        <header>
            <h1>{prop.name}</h1>
        </header>
    )
}

export default Header;