import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layout/Layout";

function Home() {

    return (
        <>
            <Layout>
                <div className="page-homepage7-bg"></div>
                <div className="section-box">
                <div className="banner-hero banner-homepage6">
                    <div className="container mt-40">
                    <div className="row">
                        <div className="col-lg-6 mt-30">
                        <h1 className="text-display-4">Welcome to My Visa Hub</h1>
                        </div>
                        <div className="col-lg-5 offset-xl-1 mt-30">
                        <p className="text-body-lead-large color-gray-500">Your one-stop solution to visas and passport renewal</p>
                        <div className="mt-40">
                            <Link href="/page-contact" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Register</a></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="section-box mt-100 jumbo-images">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-7"><img src="/assets/imgs/page/homepage7/banner-1.webp" /></div>
                    <div className="col-lg-5"><img src="/assets/imgs/page/homepage7/banner-2.jpeg" /></div>
                    </div>
                </div>
                </div>
                <div className="section-box mt-100">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <div className="pb-20 text-mb-center">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"><span className="text-display-3 color-green-900"><span className="count">52</span>k+</span>
                            <div className="text-body-quote">Travel Documents Submitted</div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"><span className="text-display-3 color-green-900"><span className="count">21</span>k+</span>
                            <div className="text-body-quote">Passports Renewed</div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"><span className="text-display-3 color-green-900"><span className="count">98</span>k+</span>
                            <div className="text-body-quote">Excellence Rate</div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"><span className="text-display-3 color-green-900"><span className="count">61</span>k+</span>
                            <div className="text-body-quote">Happy Customers</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    </div>
                </div>
                </div>
                <div className="section-box pt-100 pb-100 mt-100 bg-6">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-5 mb-30"><span className="tag-1 bg-3 color-gray-900">Discover My Visa Hub</span>
                        <h3 className="text-heading-1 mt-30">How It Works</h3>
                        <p className="text-body-lead-large color-gray-600 mt-30">Follow these steps if you want to register at My Visa Hub to apply for a travel document or renew your passport:</p>
                        <p className="text-body-lead-large color-gray-600 mt-30">&gt; Send us a message via our Contact Form.</p>
                        <p className="text-body-lead-large color-gray-600 mt-30">&gt; Indicate in which matter do you need assistance.</p>
                        <p className="text-body-lead-large color-gray-600 mt-30">&gt; An agent will contact you in less than 24h.</p>
                        <p className="text-body-lead-large color-gray-600 mt-30">&gt; Create your profile and start enjoying My Visa Hub services.</p>
                        <div className="mt-40">
                        <Link href="/page-contact" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Register Now</a></Link>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="card-grid-style-2 card-square hover-up mb-20">
                            <p className="text-body-text color-gray-600 text-comment">My Visa Hub consolidates all my visa information in one easy-to-access portal, making the entire process of managing multiple travel documents easy.</p>
                            <div className="box-img-user">
                                <h4 className="text-body-lead color-gray-900 mb-5">Alex Turner</h4>
                                <p className="text-body-text-md">United States</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="card-grid-style-2 card-square hover-up mb-20">
                            <p className="text-body-text color-gray-600 text-comment">Fantastic customer service! Whenever I've had questions or needed assistance, their team is incredibly fast and efficient in resolving issues.</p>
                            <div className="box-img-user">
                                <h4 className="text-body-lead color-gray-900 mb-5">Emily Carter</h4>
                                <p className="text-body-text-md">United States</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="card-grid-style-2 card-square hover-up mb-20">
                            <p className="text-body-text color-gray-600 text-comment">Highly recommended for anyone looking to avoid paperwork!!</p>
                            <div className="box-img-user">
                                <h4 className="text-body-lead color-gray-900 mb-5">John Mitchell</h4>
                                <p className="text-body-text-md">Canada</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="card-grid-style-2 card-square hover-up mb-20">
                            <p className="text-body-text color-gray-600 text-comment">Just a great service.</p>
                            <div className="box-img-user">
                                <h4 className="text-body-lead color-gray-900 mb-5">Mark Davis</h4>
                                <p className="text-body-text-md">United Kingdom</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="section-box">
                <div className="container mt-120">
                    <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 block-img-we-do text-center">
                        <img className="img-small img-responsive" src="assets/imgs/page/homepage7/img-1.webp" alt="Agon" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 block-we-do">
                        <h3 className="text-heading-1 mt-30">Why Choose Us?</h3>
                        <div className="row">
                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                            <p className="text-heading-1 color-green-900 mb-10">01</p>
                            <h4 className="text-heading-6 icon-leaf">Expert travel agents</h4>
                            <p className="text-body-excerpt color-gray-600 mt-15">Our travel experts will guide you through each step.</p>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                            <p className="text-heading-1 color-green-900 mb-10">02</p>
                            <h4 className="text-heading-6 icon-leaf">Fast turnaround</h4>
                            <p className="text-body-excerpt color-gray-600 mt-15">We’ll get back to you in 24h or less.</p>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                            <p className="text-heading-1 color-green-900 mb-10">03</p>
                            <h4 className="text-heading-6 icon-leaf">Safe and secure</h4>
                            <p className="text-body-excerpt color-gray-600 mt-15">Your details are 100% protected.</p>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                            <p className="text-heading-1 color-green-900 mb-10">04</p>
                            <h4 className="text-heading-6 icon-leaf">24/7 support</h4>
                            <p className="text-body-excerpt color-gray-600 mt-15">Contact our team whenever you need.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="section-box mt-140">
                <div className="container text-center">
                    <h2 className="text-heading-1 color-gray-900">Our Destinations</h2>
                    <p className="text-body-lead-large color-gray-600 mt-20">We have even more options available—register now to access to all of them.</p>
                </div>
                <div className="container list-category-homepage7 mt-70">
                    <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="grid-category-2">
                        <div className="grid-category-image">
                            <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage7/img-cat-1.jpg" /></a></Link>
                        </div>
                        <Link href="#" legacyBehavior><a className="text-heading-5 color-gray-900">Australia eVisitor, eTA & Passport Renewal</a></Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="grid-category-2">
                        <div className="grid-category-image">
                            <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage7/img-cat-2.jpg" /></a></Link>
                        </div>
                        <Link href="#" legacyBehavior><a className="text-heading-5 color-gray-900">Canada eTA & Passport Renewal</a></Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="grid-category-2">
                        <div className="grid-category-image">
                            <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage7/img-cat-3.jpg" /></a></Link>
                        </div>
                        <Link href="#" legacyBehavior><a className="text-heading-5 color-gray-900">United States: ESTA & Passport Renewal</a></Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="grid-category-2">
                        <div className="grid-category-image">
                            <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage7/img-cat-4.jpg" /></a></Link>
                        </div>
                        <Link href="#" legacyBehavior><a className="text-heading-5 color-gray-900">Indonesia: eVOA, eCD, Bali Visa & Passport Renewal</a></Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="section-box mt-140 passport-services">
                <div className="container text-center">
                    <h2 className="text-heading-1 color-gray-900">Passport Services</h2>
                    <p className="text-body-lead-large color-gray-600 mt-20">Let us take care of your passport renewal.</p>
                </div>
                <div className="container list-category-homepage7 mt-70">
                    <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="grid-category-2">
                        <div className="grid-category-image">
                            <img src="/assets/imgs/page/homepage7/img-cat-5.png" />
                        </div>
                        <p className="text-center text-heading-5 color-gray-900">Expired passport</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="grid-category-2">
                        <div className="grid-category-image">
                            <img src="/assets/imgs/page/homepage7/img-cat-6.png" />
                        </div>
                        <p className="text-center text-heading-5 color-gray-900">Lost or stolen passport</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="grid-category-2">
                        <div className="grid-category-image">
                            <img src="/assets/imgs/page/homepage7/img-cat-7.png" />
                        </div>
                        <p className="text-center text-heading-5 color-gray-900">Damaged passport</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="grid-category-2">
                        <div className="grid-category-image">
                            <img src="/assets/imgs/page/homepage7/img-cat-8.png" />
                        </div>
                        <p className="text-center text-heading-5 color-gray-900">Apply for a second passport</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </Layout>

        </>
    )
}

export default Home;