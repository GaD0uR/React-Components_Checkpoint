import Photo from "../src/profile/ProfilPhoto";
import FullName from "../src/profile/FullName";
import Address from "../src/profile/Address";
import "./App.css";

import React from "react";

function Main() {
  return (
    <div className="App">
      <Photo />
      <FullName />
      <Address />
    </div>
  );
}

export default Main;
