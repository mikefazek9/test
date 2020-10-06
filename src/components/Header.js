import React from "react";

const Header = (props) => {
  return (
    <header className="header-container">
      <h1 className="title">{props.title}</h1>
    </header>
  );
};
export default Header;
