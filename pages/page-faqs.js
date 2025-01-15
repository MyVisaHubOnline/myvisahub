/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";

function Faq() {
  return (
    <>
      <Layout>
        <div>
          <div className="section-box" />
          <section className="section-box mt-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center">
                  <h2 className="text-heading-1 color-gray-900">
                    My Passport Hub FAQs
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    Here are some frequently asked questions about our passport
                    services:
                  </p>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>
            </div>
          </section>
          <div className="section-box mt-100" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-12">
                <ul className="list-icons-2">
                  <li>
                    <h3 className="text-heading-5 mb-10">
                      What are the advantages of applying with My Passport Hub?
                    </h3>
                    <p className="text-body-text color-gray-500">
                      When you apply for your passport with us, you benefit in
                      several ways:
                    </p>
                    <ul className="text-body-text">
                      <li>
                        <strong>Expert guidance:</strong> Our specialists assist
                        you throughout the process.
                      </li>
                      <li>
                        <strong>Quick processing:</strong> We prioritize
                        efficient handling of your application.
                      </li>
                      <li>
                        <strong>High approval rate:</strong> Our experience
                        leads to successful outcomes.
                      </li>
                      <li>
                        <strong>24/7 support:</strong> We're available around
                        the clock to address your concerns.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h3 className="text-heading-5 mb-10">
                      How long does it take to get a new passport?
                    </h3>
                    <p className="text-body-text color-gray-500">
                      Processing times vary depending on the service you require
                      and your destination country. Our travel experts can
                      provide specific timelines based on your needs.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-heading-5 mb-10">
                      How do I know if I need a visa for my trip?
                    </h3>
                    <p className="text-body-text color-gray-500">
                      You can easily find out the visa requirements for your
                      destination by contacting our travel experts. They’ll
                      advise you on the official visa requirements and help you
                      get started with the application process.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-heading-5 mb-10">
                      Is My Passport Hub reliable?
                    </h3>
                    <p className="text-body-text color-gray-500">
                      With years of experience assisting travelers, My Passport
                      Hub offers a safe and secure option for obtaining your
                      travel documents, supported by 24/7 customer service.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <section className="section-box mt-100">
            <div className="container text-center">
              <h3 className="text-heading-1 mb-10">Need more information?</h3>
              <p className="text-body-lead-large color-gray-600 mt-30">
                If you have further questions, please fill out our contact form,
                and we'll respond within 72 hours.
              </p>
            </div>
            <div className="container mt-70"></div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default Faq;
