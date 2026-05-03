import { useState } from "react";
import "../App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary color">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">The Medcial Industry</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Context</a>
        <a className="nav-link" href="#">Part A</a>
        <a className="nav-link " aria-disabled="true">Part B</a>
      </div>
    </div>
  </div>
</nav>
<br />
<br />
</>



  );
}

export { Nav };
