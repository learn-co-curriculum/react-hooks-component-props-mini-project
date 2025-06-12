import React from "react";

const Header = ({ name }) => {
  // console.log(name);
  return (
    <>
      <header>
        <h1>{name}</h1>
      </header>
    </>
  );
};

export default Header;
