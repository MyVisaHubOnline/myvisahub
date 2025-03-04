import Layout from "../components/layout/Layout";

function Contact() {
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-breadcrums">
            <div className="container text-center">
              <h1 className="text-heading-2 color-gray-1000 mb-20">
                Register to My Passport Hub
              </h1>
              <p className="text-body-text color-gray-500">
                Contact us and our customer service team will attend you and
                create your profile in our Passport portal.
              </p>
              <p className="text-body-text color-gray-500">
                Attention 24/7 during all year in multiple languages.
              </p>
            </div>
          </div>
        </section>
        <section className="section-box">
          <div className="container mb-20 mt-140">
            <div className="bdrd-58 box-gray-100 icon-wave bg-blue-900">
              <div className="row">
                <div className="col-lg-12 mb-150"></div>
                <div className="col-lg-4 mb-40">
                  <h4 className="text-heading-6 color-white mb-10 mt-10">
                    Online Immigration SL <br /> dba Passports and Visas
                  </h4>
                  <p className="text-body-text color-gray-300">
                    2232 Dell Range Blvd., Suite 245
                  </p>
                  <p className="text-body-text color-gray-300">
                    Cheyenne, WY 82009
                  </p>
                  <p className="text-body-text color-gray-300">United States</p>
                  <p className="mt-20 text-body-text color-gray-300">
                    Call us: +1 833 947 2842
                  </p>
                  <p className="text-body-text color-gray-300">
                    info@mypassporthub.com
                  </p>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Enter your surname"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Indicate the type of services you are looking for"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 mt-15">
                      <button
                        className="btn btn-black icon-arrow-right-white mr-40 mb-20 bg-red-500"
                        type="submit"
                      >
                        Send Message
                      </button>
                      <br className="d-lg-none d-block" />
                      <span className="text-body-text-md color-gray-300 mb-20">
                        By clicking contact us button, you agree our terms and
                        policy,
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Contact;
