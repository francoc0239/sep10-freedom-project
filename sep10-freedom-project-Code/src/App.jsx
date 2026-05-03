import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap loads first
import "./App.css"; // Your styles now have the final word

import { useState } from "react";
import { Caresol } from "./components/Apple";
import { Nav } from "./components/Nav";
import { Content } from "./components/Content";
import { Loading } from "./components/Loading";

function App() {

  if (isLoading) {
    return <Loading />;
  };

  return (
    <>
      <Caresol />
      <Nav />
      <Content />
    </>
  );
}

export default App;
