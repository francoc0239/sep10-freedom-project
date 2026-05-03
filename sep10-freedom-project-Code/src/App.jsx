import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Caresol } from "./components/Apple";
import { Nav } from "./components/Nav";
import { Content } from "./components/Content";
import Loading  from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }


  return (
    <>
      <Caresol />
      <Nav />
      <Content />
    </>
  );
}

export default App;
