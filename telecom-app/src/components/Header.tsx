import React from "react";
interface HeaderProps {
  pageTitle: string;
  logoSrc: string;
}
function Header(props:HeaderProps) {
  return (
    <header className="App-header">
      <img src={props.logoSrc} alt="logo" className="logo" />
      <h1 className="title">{props.pageTitle} </h1>
    </header>
  );
}

export default Header;
