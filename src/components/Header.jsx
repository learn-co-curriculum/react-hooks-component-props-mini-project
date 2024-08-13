import React from "react";

const Header = ({ name }) => {
  return (
    <div>
      <header>
        <h1>{name}</h1>
      </header>
    </div>
  );
};

export default Header;