import React from "react";

function About(props) {
    return (
    <aside>
        {/* if(props.img === undefined) {
            <img src={URL("https://via.placeholder.com/215")} alt="blog logo" />
        } else {
            <img src={props.img} alt="blog logo" />
        } */}
        <img src={props.img} alt="blog logo" />
        <p>{props.about}</p>
    </aside>
    );
}

export default About