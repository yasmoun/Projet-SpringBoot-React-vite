import { useState } from "react";
import "./App.css";
import logo from "../assets/Tunisie-Telecom-logo.png";
import Header from "./Header";
import LoginForm from "./LoginForm";

function App (){
  return (
    <div>
      <Header pageTitle="Tunisie Telecom " logoSrc={logo}></Header>
      <LoginForm />
    </div>
  );
};

export default App;
