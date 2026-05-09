import { useState } from "react";
import "../App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Caresol() {
  return (
    <div>
      <div class="container-fluid p-0">
        <div class="row g-0">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div id="home" />
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D" class="d-block w-100 img-fluid custom-img" alt="..." />
                  <div class="carousel-caption d-md-block">
                    <h1 class="title">Medical Industry</h1>
                  </div>
                </div>

                <div class="carousel-item ">
                  <img src="https://media.istockphoto.com/id/2215511952/photo/healthy-lifestyle-and-medical-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=2HVg6CokkdBDQzZO7F575GCwblwVdEcFWEnhEWb884U=" class="d-block w-100 size img-fluid custom-img" alt="..." />
                  <div class="carousel-caption d-md-block">
                    <h1 class="title">Medical Industry</h1>
                  </div>
                </div>

                <div class="carousel-item">
                  <img src="https://media.istockphoto.com/id/2147705600/photo/doctor-holding-clipboard-consulting-child.webp?a=1&b=1&s=612x612&w=0&k=20&c=bbX5pyM2bI3OXRUYZNJw9fXN5Xa3bjl7HCN2jCtl08U=" class="d-block w-100 img-fluid custom-img" alt="..." />
                  <div class="carousel-caption d-md-block">
                    <h1 class="title">Medical Industry</h1>
                  </div>
                </div>

                <div class="carousel-item">
                  <img src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D" class="d-block w-100 img-fluid custom-img" alt="..." />
                  <div class="carousel-caption d-md-block">
                    <h1 class="title">Medical Industry</h1>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://media.istockphoto.com/id/1327568875/photo/healthcare-business-graph-data-and-growth-insurance-healthcare-doctor-analyzing-medical-of.webp?b=1&s=612x612&w=0&k=20&c=KoLVnw11k7xak9RHuPbUzjpmAcRZigy7jGwX9tlJSY0=" class="d-block w-100 img-fluid custom-img" alt="..." />
                  <div class="carousel-caption d-md-block">
                    <h1 class="title">Medical Industry</h1>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Caresol };
