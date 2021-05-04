import React from "react";
import { Link } from "react-router-dom";

function Nav({ setIsLogin }) {
  const LogoutSubmit = () => {
    localStorage.clear();
    setIsLogin(false);
  };

  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">⭐QuAnGnGu⭐ </Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create Note</Link>
        </li>
        <li onClick={LogoutSubmit}>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
