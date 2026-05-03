import { useState } from "react";
import "../App.css";
import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";


function Content() {
    return (
        <>
            <h1 className="text-center first"> The Medical Industry</h1>
            <div className="top">
                <div className="container">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-sm-12 col-md-7">
                                <div className="card md-3">
                                    <div
                                    id="carouselExample"
                                    className="carousel slide"
                                    data-bs-ride="carousel"
                                >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img
                                                src="https://picsum.photos/600/300"
                                                className="d-block w-100"
                                                alt="Slide 1"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="https://picsum.photos/600/300?blur"
                                                className="d-block w-100"
                                                alt="Slide 2"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="https://picsum.photos/600/300?grayscale"
                                                className="d-block w-100"
                                                alt="Slide 3"
                                            />
                                        </div>
                                    </div>
                                </div>


                                    <div className="card-body up-2">
                                        <h4 className="card-title">Context</h4>
                                        <p className="card-text">The Medical Industry is everything related to Medcial products, Medical buildings, Health insurance, and jobs like; doctors, hospitals, and nurses. Technology has and always will be ingraved in the sucess of the Medcial Industry because of the big impact is has. Some examples are equipment like foil blankets, gauze, CT scanners, Bandges. These different types of equipment would not be here without technology.</p>
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
                                                                <div
                                    id="carouselExample"
                                    className="carousel slide"
                                    data-bs-ride="carousel"
                                >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img
                                                src="https://picsum.photos/600/300"
                                                className="d-block w-100"
                                                alt="Slide 1"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="https://picsum.photos/600/300?blur"
                                                className="d-block w-100"
                                                alt="Slide 2"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="https://picsum.photos/600/300?grayscale"
                                                className="d-block w-100"
                                                alt="Slide 3"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body up">
                                    <h3 className="card-title">Pt A: Existing technology</h3>
                                    <br />
                                    <h4 className="card-title">Mental Health</h4>
                                    <p className="card-text"> Mental health is very important and everypone should have the help that they need. There are many unknown apps that people can use that improves mental health. Here are some examples and what they do. </p>
                                    <ul className="card-text">
                                        <li><a href="https://mobile.va.gov/app/mindfulness-coach">Mindfulness Coach</a></li>
                                        <li><a href="https://www.getmoodfit.com/"> Mood Fit</a></li>
                                        <li><a href="https://insighttimer.com/">Insight Timer</a></li>
                                    </ul>
                                    <p className="card-text">These apps help people mintaina healthy and stable mind by finding ways in order to make them relaxed. These apps make people do things like pratices that help them when they need it. Some examples of practices are like listening to music, meditation, sleeping, going outside for a walk, doing exercise, ect. These apps keep track of peoples mantal health and they do daily check ups to make sure people are spending time for their mental health. These apps are amazing ways to relax destress in a healthy way when you or anyone else really needs it. </p>
                                    <h4 className="card-title">Physical Health</h4>
                                    <p className="card-text">There are many already existing technologies that help people with their physical health. Here are some examples.</p>
                                    <ul className="card-text">
                                        <li><a href="https://www.myplate.gov/app/shopsimple/desktop ">My Plate</a></li>
                                        <li><a href="https://mobile.va.gov/app/move-coach">My Coach</a></li>
                                        <li><a href="https://www.fda.gov/medical-devices/consumer-products/contact-lenses">Contact Lens</a></li>
                                        <li><a href="https://www.fda.gov/medical-devices/products-and-medical-procedures/respiratory-devices">Respiratory Devices</a></li>
                                        <li><a href="https://www.fda.gov/medical-devices/consumer-products/hearing-aids">Hearing Aids</a></li>
                                    </ul>
                                    <p className="card-text">These devices and apps can give people medical care and improve their lives. Devies like contact lenses and hearing aids can helped make peoples lives easier. These apps and devices help  people maintain their physical health by providing them with resources in order to help them get what they need to be healthy. For example, some of these apps give people list of what to do everyday to be fit. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <div className="card">
                                <div
                                    id="carouselExample"
                                    className="carousel slide"
                                    data-bs-ride="carousel"
                                >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img
                                                src="https://picsum.photos/600/300"
                                                className="d-block w-100"
                                                alt="Slide 1"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="https://picsum.photos/600/300?blur"
                                                className="d-block w-100"
                                                alt="Slide 2"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="https://picsum.photos/600/300?grayscale"
                                                className="d-block w-100"
                                                alt="Slide 3"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body up">
                                    <h3 className="card-title">Pt B: Future Technology</h3>
                                    <br />
                                    <p className="card-text">There are many things that could be made in the far future in order to improve peoples health. There are many ideas too that we could make. Maybe in the near future we could find new discovieers to make these ideas possible. Here are some things that could be made with  future technology </p>
                                    <ul  className="card-text">
                                        <li>Personal Robot Doctor</li>
                                    </ul>
                                    <p className="card-text">THis robot doctor will be able to make you any medicine you need and it'll give you the right amount of medicine everytime do you dont accidently overdose. It'll be aable to taek your temperature and itll bne able to take care of you and give you things when you cant move during that time. It has the ability to move anywhere at anytime but it will give you priviciy. It has a built in safe Ai so it can be up to date and that will make sure there is no mistakes. You can call it whenever you want and you can name it anything you want. It doesnt use up electiry, it uses the sun in order to be charged.</p>
                                    <ul className="card-text">
                                        <li>Fast Aid</li>
                                    </ul>
                                    <p className="card-text">This Fast Aid looks just like a regualr band aid. but its not a regular band aid. Its a band aid that can heal your cuts and bruises very fast. As you put on the bandaid, it heals minor cuts and bruises in 20 seconds and then you can just take it off. For bigger cuts, you can use a big fast aid it only takes 1 minite in order for your cut to heal. It will also disinfect your cuts so you wont get sick or your cut wont get infected. The fast aid is really flexableand light so it wont feel like you have one. Its comfotasble and faster way to heal your cuts</p>
                                    <p className="card-text">The future of technology is endless and the future technology will be the key to a better medical industry. Itll save thousands of lives of those who are hurt. This is why technology is apart of the medical industry. Without technology, nothing, including medicine wouldn't be the same. Nothing would work without technology and our lives would be different. </p>
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
