/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

const Header = ({ handleOpen, headerStyle }) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    const pathname = usePathname();
    return (
        <>
            <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link href="/" legacyBehavior>
                                    <a className="d-flex">
                                        {headerStyle ? <img alt="Agon" src="/assets/imgs/template/logo.png" /> : <img alt="Agon" src="/assets/imgs/template/logo.png" />}
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    { pathname !== "/page-contact" && 
                                        <ul className="main-menu">
                                            <li>
                                                <Link href="/" legacyBehavior><a className="active">Home</a></Link>
                                            </li>
                                            <li>
                                                <Link href="/page-about" legacyBehavior><a className="active">About Us</a></Link>
                                            </li>
                                            <li>
                                                <Link href="/page-faqs" legacyBehavior><a className="active">FAQs</a></Link>
                                            </li>
                                            <li>
                                                <Link href="/page-contact" legacyBehavior><a className="active">Contact Us</a></Link>
                                            </li>
                                        </ul>
                                    }
                                </nav>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="block-signin">
                                { pathname !== "/page-contact" && 
                                    <Link href="/page-contact" legacyBehavior><a className="btn btn-default hover-up icon-arrow-right">Register</a></Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;