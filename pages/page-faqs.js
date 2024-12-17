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
                                    <h2 className="text-heading-1 color-gray-900">My Visa Hub FAQs</h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">Here you’ll find answer to commonly asked questions about our services.</p>
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
                                        <h3 className="text-heading-5 mb-10">What are the advantages of applying with My Visa Hub?</h3>
                                        <p className="text-body-text color-gray-500">When you apply for your travel documents with us you benefit in a number of ways. Here are some of our key benefits:</p>
                                        <ul className="text-body-text">
                                            <li>Expert guidance</li>
                                            <li>Quick processing</li>
                                            <li>High approval rate</li>
                                            <li>24/7 support</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">How long does it take to get a visa and/or new passport?</h3>
                                        <p className="text-body-text color-gray-500">The length of time it takes to get your documents depends on the service you require. Processing times can also vary depending on your destination country.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">How do I know if I need a visa for my trip?</h3>
                                        <p className="text-body-text color-gray-500">You can easily find out the visa requirements for your destination by contacting our travel experts. They’ll advise you on the official visa requirements and help you get started with the application process.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Is My Visa Hub reliable?</h3>
                                        <p className="text-body-text color-gray-500">My Visa Hub has many years of experience helping travelers prepare for their trip. We offer a safe and secure option to get your travel documents, with 24/7 support.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <section className="section-box mt-100">
                        <div className="container text-center">
                            <h3 className="text-heading-1 mb-10">Need more information?</h3>
                            <p className="text-body-lead-large color-gray-600 mt-30">If you still need to speak to our team, simply fill in the contact form and we’ll get back to you within 72 hours.</p>
                        </div>
                        <div className="container mt-70">
                        </div>
                    </section>
                </div>

            </Layout>

        </>
    )
}

export default Faq;