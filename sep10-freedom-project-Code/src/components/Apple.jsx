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
                  <img src="" className="d-block w-100 img-fluid custom-img" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>

                <div className="carousel-item">
                  <img src="" className="d-block w-100 size" alt="..." />
                  <h1 className="text-center">{/* add anything here */}</h1>
                </div>

                <div className="carousel-item">
                  <img src="" className="d-block w-100" alt="..." />
                  <h1 className="text-center abc"> {/* add anything here */}.</h1>
                </div>

                <div className="carousel-item">
                  <img src="" className="d-block w-100" alt="..." />
                  <h1 className="text-center title abc">{/* add anything here */}</h1>
                </div>

                <div className="carousel-item">
                  <img src="" className="d-block w-100" alt="..." />
                  <h1 className="title abc">{/* add anything here */}</h1>
                </div>

                <div className="carousel-item">
                  <img src="" className="d-block w-100" alt="..." />
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
