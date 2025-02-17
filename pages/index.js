import Link from "next/link";
import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import FormCards from "../components/FormCards/index";
import { saveUtmsOnCookies } from "../util/utmsUtils";

function Home() {
  useEffect(() => {
    saveUtmsOnCookies();
  });

  return (
    <>
      <Layout title="My Passport Hub">
        <div className="page-homepage7-bg"></div>
        <FormCards />
        <div className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <div className="pb-20 text-mb-center">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center">
                      <span className="text-display-3 color-blue-300">
                        <span className="count">+10</span>
                      </span>
                      <div className="text-body-quote">Years in Business</div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center">
                      <span className="text-display-3 color-blue-300">
                        <span className="count">700</span>k+
                      </span>
                      <div className="text-body-quote">Passports processed</div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center">
                      <span className="text-display-3 color-blue-300">
                        <span className="count">600</span>k+
                      </span>
                      <div className="text-body-quote">Satisfied customers</div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center">
                      <span className="text-display-3 color-blue-300">
                        <span className="count">1000</span>k+
                      </span>
                      <div className="text-body-quote">Hours saved</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </div>
        <div className="section-box pt-100 pb-100 mt-100 bg-blue-900">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mb-30">
                <span className="tag-1 bg-3 color-gray-900">
                  Discover My Passport Hub
                </span>
                <h3 className="text-heading-1 mt-30 color-white">
                  How It Works
                </h3>
                <p className="text-body-lead-large color-gray-300 mt-30">
                  Follow these simple steps to get started with My Passport Hub
                  and renew your passport:
                </p>
                <ol className="ol-number">
                  <li className="text-body-lead-large color-gray-300 mt-30">
                    <strong>Select your form:</strong> Choose the passport form
                    that best meets your needs
                  </li>
                  <li className="text-body-lead-large color-gray-300 mt-30">
                    <strong>Fill it out online: </strong> Complete your form
                    using our pro online wizard!
                  </li>
                  <li className="text-body-lead-large color-gray-300 mt-30">
                    <strong>Professional revision: </strong> Your document will
                    be revised by our experienced experts to ensure maximum
                    optimization.
                  </li>
                  <li className="text-body-lead-large color-gray-300 mt-30">
                    <strong>Receive and Print: </strong> Once you get your
                    expertly reviewed document, you can simply print it and mail
                    it in/deliver it to a passport office depending on your
                    needs.
                  </li>
                </ol>
                <div className="mt-40">
                  <Link
                    href="https://app.mypassporthub.com/home"
                    legacyBehavior
                  >
                    <a
                      className="btn btn-default btn-white icon-arrow-right-white bg-red-500 color-white"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Start Now
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">
                        My Passport Hub consolidates all my passport information
                        in an easy-to-access portal, making the document
                        management process effortless.
                      </p>
                      <div className="box-img-user">
                        <h4 className="text-body-lead color-gray-900 mb-5">
                          Alex Turner
                        </h4>
                        <p className="text-body-text-md">United States</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">
                        Fantastic customer service! Whenever I&apos;ve had
                        questions or needed help, their team is incredibly fast
                        and efficient.
                      </p>
                      <div className="box-img-user">
                        <h4 className="text-body-lead color-gray-900 mb-5">
                          Emily Carter
                        </h4>
                        <p className="text-body-text-md">United States</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">
                        Highly recommended for anyone who wants to avoid
                        paperwork.
                      </p>
                      <div className="box-img-user">
                        <h4 className="text-body-lead color-gray-900 mb-5">
                          John Mitchell
                        </h4>
                        <p className="text-body-text-md">Canada</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">
                        An excellent service overall.
                      </p>
                      <div className="box-img-user">
                        <h4 className="text-body-lead color-gray-900 mb-5">
                          Mark Davis
                        </h4>
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
                <img
                  className="img-small img-responsive"
                  src="assets/imgs/page/homepage7/img-1.webp"
                  alt="Agon"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 block-we-do">
                <h3 className="text-heading-1 mt-30">Why Choose Us?</h3>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <p className="text-heading-1 color-blue-300 mb-10">01</p>
                    <h4 className="text-heading-6 icon-leaf">
                      Simple, intuitive application form
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Easy step-by-step instructions and comprehensive error
                      checking.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <p className="text-heading-1 color-blue-300 mb-10">02</p>
                    <h4 className="text-heading-6 icon-leaf">Fast response</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      We’ll contact you in 24 hours or less.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <p className="text-heading-1 color-blue-300 mb-10">03</p>
                    <h4 className="text-heading-6 icon-leaf">
                      Safe and secure
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Your data is 100% protected.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <p className="text-heading-1 color-blue-300 mb-10">04</p>
                    <h4 className="text-heading-6 icon-leaf">24/7 support</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Reach out to our team anytime you need assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box mt-140 passport-services">
          <div className="container text-center">
            <h2 className="text-heading-1 color-gray-900">Passport Services</h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              We handle passport renewals for various situations, including:
            </p>
          </div>
          <div className="container list-category-homepage7 mt-70">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="grid-category-2">
                  <div className="grid-category-image">
                    <img src="/assets/imgs/page/homepage7/img-cat-5.png" />
                  </div>
                  <p className="text-center text-heading-5 color-gray-900">
                    Expired passports
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="grid-category-2">
                  <div className="grid-category-image">
                    <img src="/assets/imgs/page/homepage7/img-cat-6.png" />
                  </div>
                  <p className="text-center text-heading-5 color-gray-900">
                    Lost or stolen passports
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="grid-category-2">
                  <div className="grid-category-image">
                    <img src="/assets/imgs/page/homepage7/img-cat-7.png" />
                  </div>
                  <p className="text-center text-heading-5 color-gray-900">
                    Damaged passports
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="grid-category-2">
                  <div className="grid-category-image">
                    <img src="/assets/imgs/page/homepage7/img-cat-8.png" />
                  </div>
                  <p className="text-center text-heading-5 color-gray-900">
                    Applications for a new passport
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
