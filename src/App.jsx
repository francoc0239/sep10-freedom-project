import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap loads first
import "./App.css"; // Your styles now have the final word

import { useState } from "react";
import { Caresol } from "./components/Apple";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
          <Caresol />
          <Nav />
          </>

  );
}

export default App;
