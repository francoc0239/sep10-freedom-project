import { useState } from "react";
import "../App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Content() {
    return (
        <>
            <h1 className="text-center"> The Medical Industry</h1>
            <div class="top">
                <div class="container">
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-9">
                                <div class="card mb-3">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Context</h5>
                                        <p class="card-text">The Medical Industry is everything related to Medcial products, Medical buildings, Health insurance, and jobs like; doctors, hospitals, and nurses. Technology has and always will be ingraved in the sucess of the Medcial Industry because of the big impact is has. Some examples are equipment like foil blankets, gauze, CT scanners, Bandges. These different types of equipment would not be here without technology.</p>
                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div class="container">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <div class="card mb-3">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Pt A</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <div class="card mb-3">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Pt B</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}
export { Content };
