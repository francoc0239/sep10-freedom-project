import { useState } from "react";
import "../App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Content() {
    return (
        <>
            <h1 className="text-center"> The Medical Industry</h1>
            <div className="top">
                <div className="container">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-sm-12 col-md-9">
                                <div className="card mb-3">
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title">Context</h4>
                                        <p className="card-text">The Medical Industry is everything related to Medcial products, Medical buildings, Health insurance, and jobs like; doctors, hospitals, and nurses. Technology has and always will be ingraved in the sucess of the Medcial Industry because of the big impact is has. Some examples are equipment like foil blankets, gauze, CT scanners, Bandges. These different types of equipment would not be here without technology.</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="card mb-3">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title">Pt A: Existing technology</h3>
                                    <br />
                                    <h4 className="card-text">Mental Health</h4>
                                    <p className="card-text"> Mental health is very important and everypone should have the help that they need. There are many unknown apps that people can use that improves mental health. Here are some examples and what they do. </p>
                                    <ul className="card-text">
                                        <li><a href="https://mobile.va.gov/app/mindfulness-coach">Mindfulness Coach</a></li>
                                        <li><a href="https://www.getmoodfit.com/"> Mood Fit</a></li>
                                        <li><a href="https://insighttimer.com/">Insight Timer</a></li>
                                    </ul>
                                    <p className="card-text">These apps help people mintaina healthy and stable mind by finding ways in order to make them relaxed. These apps make people do things like pratices that help them when they need it. Some examples of practices are like listening to music, meditation, sleeping, going outside for a walk, doing exercise, ect. These apps keep track of peoples mantal health and they do daily check ups to make sure people are spending time for their mental health. These apps are amazing ways to relax destress in a healthy way when you or anyone else really needs it. </p>
                                    <h4 className="card-text">Physical Health</h4>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="card mb-3">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title">Pt B: Future Technology</h3>
                                    <br />
                                    <p className="card-text"></p>
                                    <p className="card-text"></p>
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
