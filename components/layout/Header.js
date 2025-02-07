/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = ({ handleOpen, headerStyle }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  const pathname = usePathname();
  return (
    <>
      <header
        className={
          scroll
            ? `${headerStyle} header sticky-bar stick `
            : `${headerStyle} header sticky-bar`
        }
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link href="/" legacyBehavior>
                  <a className="d-flex">
                    <Image
                      src="/assets/imgs/template/logo.png"
                      alt="My-passport-hub"
                      width={156}
                      height={48}
                    />
                  </a>
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  {pathname !== "/page-contact" && (
                    <ul className="main-menu">
                      <li>
                        <Link href="/" legacyBehavior>
                          <a className="active">Home</a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://app.mypassporthub.com/about-us"
                          legacyBehavior
                        >
                          <a
                            className="active"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            About Us
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://app.mypassporthub.com/faq"
                          legacyBehavior
                        >
                          <a
                            className="active"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            FAQs
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://app.mypassporthub.com/contact"
                          legacyBehavior
                        >
                          <a
                            className="active"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Contact Us
                          </a>
                        </Link>
                      </li>
                    </ul>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
