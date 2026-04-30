import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap loads first
import "./App.css"; // Your styles now have the final word

import { useState } from "react";
import { Caresol } from "./components/Apple";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div classname="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="title">The Medical Industry</h1>
          <Caresol />
        </div>
      </div>
      <div className="row">
        <div classname="col-sm-12">
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default App;
