import { useState } from "react";
import "../App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Caresol() {
  return (
  <div>
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner">

              <div className="carousel-item active">
                <img src="/* replace images */" className="d-block w-100" alt="..." />
                  <h1 className="text-center black abc">{/* add anything here */}</h1>
              </div>

              <div className="carousel-item">
                <img src="../img/balloon-2.jpg" className="d-block w-100" alt="..." />
                  <h1 className="text-center">{/* add anything here */}</h1>
              </div>

              <div className="carousel-item">
                <img src="../img/balloon-3.jpg" className="d-block w-100" alt="..." />
                  <h1 className="text-center black abc"> {/* add anything here */}.</h1>
              </div>

              <div className="carousel-item">
                <img src="../img/balloon-4.jpg" className="d-block w-100" alt="..." />
                  <h1 className="text-center title abc">{/* add anything here */}</h1>
              </div>

              <div className="carousel-item">
                <img src="../img/balloon-5.jpg" className="d-block w-100" alt="..." />
                  <h1 className="title  black abc">{/* add anything here */}</h1>
              </div>

              <div className="carousel-item">
                <img src="../img/balloon-6.jpg" className="d-block w-100" alt="..." />
                  <h1 className="title black abc">{/* add anything here */}</h1>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export { Caresol };
