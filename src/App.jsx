import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap loads first
import "./App.css"; // Your styles now have the final word

import { useState } from "react";
import { Caresol } from "./components/Apple";
import { Nav } from "./components/Nav";
import { Content } from "./components/Content";
import { LoadingScreen } from "./components/Loading";

function App() {
  return (
    <>
    <LoadingScreen>
      <img src="../images/Shirlie1.png" alt="Loading..." id="loading-image" />
      <p style="margin-top: 20px; color: #555;">Preparing your experience...</p>
    </LoadingScreen>
          <Caresol />
          <Nav />
          <Content />
    </>

  );
}

export default App;
