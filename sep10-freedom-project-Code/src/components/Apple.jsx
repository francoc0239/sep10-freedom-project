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
                  <img src="https://picsum.photos/1920/1080" className="d-block w-100 img-fluid custom-img" alt="..." />
                  <div class="carousel-caption  ">
                    <h1 className="title">Medical Industry</h1>
                  </div>
                </div>

                <div className="carousel-item">
                  <img src="https://picsum.photos/1920/1080" className="d-block w-100 size" alt="..." />
                  <div class="carousel-caption ">
                    <h1 className="title">Medical Industry</h1>
                  </div>
                </div>

                <div className="carousel-item">
                  <img src="https://picsum.photos/1920/1080" className="d-block w-100" alt="..." />
                  <div class="carousel-caption ">
                    <h1 className="title">Medical Industry</h1>
                  </div>
                </div>

                <div className="carousel-item">
                  <img src="https://picsum.photos/1920/1080" className="d-block w-100" alt="..." />
                  <div class="carousel-caption ">
                    <h1 className="title">Medical Industry</h1>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://picsum.photos/1920/1080" className="d-block w-100" alt="..." />
                  <div class="carousel-caption ">
                    <h1 className="title">Medical Industry</h1>
                  </div>
                </div>

                <div className="carousel-item">
                  <img src="https://picsum.photos/1920/1080" className="d-block w-100" alt="..." />
                  <div class="carousel-caption ">
                    <h1 className="title">Medical Industry</h1>
                  </div>
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
