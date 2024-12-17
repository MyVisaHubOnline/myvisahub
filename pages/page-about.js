import Link from "next/link";
import { useState } from "react";
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import TeamSlider from "../components/slider/Team";
import TestimonialSlider from "../components/slider/Testimonial";

function About1() {
    // Open modal
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const openModal = () => {
    setModal(!modal);
    };
    const spinner = () => {
    setVideoLoading(!videoLoading);
    };
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-2 bg-about-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7"><span className="tag-1 color-orange-900">Discover My Visa Hub</span>
                                    <h1 className="text-display-3 mt-30">About My Visa Hub</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">At My Visa Hub, we make travel preparation <strong>simple and stress-free</strong>. Whether you’re applying for a visa or renewing your passport, our goal is to streamline the process so you can focus on your trip.</p>
                                    <div className="mt-40">
                                        {/* <Link href="/page-service-1" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Join Our Team
                                        </a></Link>

                                        <Link href="/page-contact" legacyBehavior><a className="btn btn-link color-gray-900 icon-arrow-right text-heading-6">Contact Us
                                        </a></Link> */}
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <div className="block-1 shape-1"><img src="/assets/imgs/page/about/1/banner2.png" alt="Agon" /></div>
                                        <img className="img-responsive shape-2" alt="Agon" src="assets/imgs/page/about/1/banner1.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="bd-bottom pb-20 mb-40 text-mb-center">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={12} time={3}/></span>
                                            <p className="text-body-text color-gray-500 pl-40t">Years in Business</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={70} time={3}/>k</span>
                                            <p className="text-body-text color-gray-500 pl-40">Profiles created</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={22} time={3}/></span>
                                            <p className="text-body-text color-gray-500 pl-40">Nationalities attended</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={37} time={3}/>k</span>
                                            <p className="text-body-text color-gray-500 pl-40">Recurring customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </div>
                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">Discover My Visa Hub</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">We’re a trusted provider of visa and passport services</h2>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="box-image text-center">
                                    <img className="img-responsive bdrd-16" src="assets/imgs/page/about/1/img-1.webp" alt="Agon" />
                                </div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900 mb-10">Why Choose Us?</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">Here’s just some of the reasons why so many travelers choose My Visa Hub:</p>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-40">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">1. Expert guidance</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Our travel specialists are here to assist you every step of the way.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">2. Fast turnaround</h4>
                                        <p className="text-body-text color-gray-600 mt-15">We prioritize quick processing, responding to your needs within 24 hours.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">3. 24/7 support:</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Our team is available around the clock to answer your questions and provide assistance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="text-center mb-20"><span className="tag-1 bg-6 color-green-900">Discover My Visa Hub</span></div>
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900">What We Offer</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">We offer both visa and passport services:</p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-style-3 pb-40 bg-5 mb-30">
                                    <div className="grid-1-img"><img src="/assets/imgs/page/homepage1/icon-01.png" alt="Agon" /></div>
                                    <h3 className="text-heading-3 mt-20">Comprehensive Visa Services</h3>
                                    <p className="text-body-excerpt mt-20">Our expert team provides guidance for all types of visas, helping you meet your destination’s requirements and ensuring smooth processing.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-style-3 bd-bg-6 pb-40 mb-30">
                                    <div className="grid-1-img"><img src="/assets/imgs/page/homepage1/icon-02.png" alt="Agon" /></div>
                                    <h3 className="text-heading-3 mt-20">Passport Renewal Solutions</h3>
                                    <p className="text-body-excerpt mt-20">Need to renew an expired passport or replace a lost or damaged one? We take care of it all, offering fast and efficient services to keep your travel plans on track.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-style-3 bg-2 pb-40 mb-30">
                                    <div className="grid-1-img"><img src="/assets/imgs/page/homepage1/icon-03.png" alt="Agon" /></div>
                                    <h3 className="text-heading-3 mt-20">Expert Consulting in Immigration</h3>
                                    <p className="text-body-excerpt mt-20">Specialized advisory services provided by professionals with deep knowledge and experience in immigration laws, regulations, and procedures.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {modal ? (
                    <section className="modal__bg" onClick={openModal}>
                        <div className="modal__align">
                        <div className="modal__content" modal={modal}>
                            <div className="modal__video-align">
                            {videoLoading ? (
                                <div className="modal__spinner">
                                    <i className="fi-rr-refresh"></i>
                                </div>
                            ) : null}
                            <iframe
                                className="modal__video-style"
                                onLoad={spinner}
                                loading="lazy"
                                width="800"
                                height="500"
                                src="https://www.youtube.com/embed/oRI37cOPBQQ"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                            </div>
                        </div>
                        </div>
                    </section>
                ) : null}
            </Layout>

        </>
    )
}

export default About1;