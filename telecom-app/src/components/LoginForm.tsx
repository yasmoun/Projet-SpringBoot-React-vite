import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./login.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "telecom" && password === "telecom") {
      navigator("/equipments");
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect");
    }
  };

  return (
    <div className="login-form">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Admin</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="utilisateur"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="mot de passe"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <button type="submit" className="btn">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
