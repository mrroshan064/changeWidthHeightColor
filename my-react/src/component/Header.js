import React from "react";
import CatData from "../data/CatData";

import { Link } from "react-router-dom";

function Header({item}) {
  return (
    <header className="header flex">
      <img
        className="logo"
        src={require("../assets/images/logo.png")}
        alt="logo"
      />
      <ul>
        {CatData.map((item) => (
          <li key={item.id}>
            <Link to={item.id}>{item.catName}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
