/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      <footer className="footer mt-50">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-4 col-sm-6 text-center text-md-start">
                <Link href="/" legacyBehavior>
                  <a>
                    <Image
                      src="/assets/imgs/template/logo.png"
                      alt="my-passport-hub"
                      width={156}
                      height={48}
                    />
                  </a>
                </Link>
              </div>
              <div className="col-md-8 col-sm-6 text-center text-md-end">
                {pathname !== "/page-faqs" && (
                  <>
                    <span className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20">
                      Ready to get started?
                    </span>
                    <Link href="/page-contact" legacyBehavior>
                      <a className="btn btn-square">Register</a>
                    </Link>
                  </>
                )}
                {pathname === "/page-faqs" && (
                  <>
                    <Link href="/page-contact" legacyBehavior>
                      <a className="btn btn-square">Get in Touch</a>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">Contact</h4>
              <div className="mt-20 text-heading-6 color-gray-900">
                <b>Passports and Visas LLC</b>
              </div>
              <div className="text-body-text color-gray-600">
                2232 Dell Range Blvd., Suite 245
              </div>
              <div className="text-body-text color-gray-600">
                Cheyenne, WY 82009
              </div>
              <div className="text-body-text color-gray-600 mb-20">
                United States
              </div>
              <div className="mt-20 text-body-text color-gray-600">
                Call us: +1 833 947 2842
              </div>
              <div className="text-body-text color-gray-600">
                info@mypassporthub.com
              </div>
            </div>
          </div>
          <div className="footer-bottom mt-20">
            <div className="row">
              <div className="col-md-12">
                <span className="color-gray-400 text-body-lead">
                  © My Passport Hub 2024
                </span>
                <Link href="/page-terms" legacyBehavior>
                  <a className="text-body-text color-gray-400 ml-50">
                    Terms of Service
                  </a>
                </Link>
                <Link href="/page-privacy" legacyBehavior>
                  <a className="text-body-text color-gray-400 ml-50">
                    Privacy Policy
                  </a>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="text-body-text color-gray-400 mt-40">
                  Legal Notice
                </div>
                <div className="text-body-text color-gray-400 mb-20">
                  https://www.mypassporthub.com is a private company not
                  affiliated with the U.S. Government. Our services include
                  assistance with the preparation and submission of
                  passport-related applications.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
