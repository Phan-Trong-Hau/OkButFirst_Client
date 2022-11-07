import { Link } from "react-router-dom";

import "./Footer.scss";
import visa from "../../Assets/svg/visa.svg";
import logo from "../../Assets/svg/logo.svg";
import paypal from "../../Assets/svg/paypal.svg";
import instagram from "../../Assets/svg/ins.svg";
import twitter from "../../Assets/svg/twitter.svg";
import shopPay from "../../Assets/svg/shopPay.svg";
import iconMail from "../../Assets/svg/iconMail.svg";
import discover from "../../Assets/svg/discover.svg";
import applePay from "../../Assets/svg/applePay.svg";
import iconPlus from "../../Assets/svg/iconPlus.svg";
import iconPhone from "../../Assets/svg/iconPhone.svg";
import mastercard from "../../Assets/svg/mastercard.svg";
import americanExpress from "../../Assets/svg/americanExpress.svg";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
    const [show, setShow] = useState([]);
    const prevElement = useRef([]);

    // when user click title... Now, element is h5(title)
    const handleOnClick = (e) => {
        if (
            e.currentTarget.parentElement.children[1] === prevElement.current[1]
        ) {
            // If prev element exist equal with element had click
            // This happens when the user clicks twice on an element

            if (prevElement.current[1]?.classList[1] === "is-show") {
                // if element exist class is-show, we need remove it.
                // At the same time, element title remove class active
                prevElement.current[0].classList.remove("active");
                prevElement.current[1].classList.remove("is-show");
            } else {
                // if it not yet class is-show, we need add both act for class on click
                e.currentTarget.children[0].classList.add("active");
                e.currentTarget.parentElement.children[1].classList.add(
                    "is-show"
                );
            }
        } else {
            // if it doesn't exist yet or exist class other with element had click

            if (prevElement.current[1]?.classList[1] === "is-show") {
                // Remove act had exist
                prevElement.current[0].classList.remove("active");
                prevElement.current[1].classList.remove("is-show");
            }

            // And add action that doesn't exist yet
            e.currentTarget.children[0].classList.add("active");
            e.currentTarget.parentElement.children[1].classList.add("is-show");
        }

        // set elements is in progress and re-rendering the interface
        setShow([
            e.currentTarget.children[0],
            e.currentTarget.parentElement.children[1],
        ]);
    };

    useEffect(() => {
        // Save element when done
        prevElement.current = show;
    }, [show]);

    const year = new Date().getFullYear();
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="footer-middle">
                        <div className="container-custom">
                            <div className="site-footer__bottom">
                                <div className="footer-row">
                                    <div className="footer-col footer-logo">
                                        <Link to="#">
                                            <img
                                                src={logo}
                                                alt="OK-But-First-Coffee"
                                                title="OK But First Coffee"
                                            />
                                        </Link>
                                    </div>
                                    <div className="footer-col">
                                        <h5
                                            className="footer-title"
                                            onClick={handleOnClick}
                                        >
                                            OK, BUT FIRST...
                                            <img
                                                src={iconPlus}
                                                alt="icon-plus"
                                            />
                                        </h5>
                                        <ul className={"footer-list"}>
                                            <li className="footer-item">
                                                <Link to="/collections/coffee-shop">
                                                    Coffee Shop
                                                </Link>
                                            </li>
                                            <li className="footer-item">
                                                <Link to="/products/coffee-club-subscription">
                                                    Coffee Club
                                                </Link>
                                            </li>
                                            <li className="footer-item">
                                                <Link to="/blogs/coffee-101">
                                                    Coffee 101
                                                </Link>
                                            </li>
                                            <li className="footer-item">
                                                <Link to="/collections/merch-shop">
                                                    Merch
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-col">
                                        <h5
                                            className="footer-title"
                                            onClick={handleOnClick}
                                        >
                                            ABOUT US
                                            <img
                                                src={iconPlus}
                                                alt="icon-plus"
                                            />
                                        </h5>
                                        <ul className="footer-list">
                                            <li className="footer-item">
                                                <Link to="/pages/about-us">
                                                    About Us
                                                </Link>
                                            </li>
                                            <li className="footer-item">
                                                <Link to="/pages/contact-us">
                                                    Contact Us
                                                </Link>
                                            </li>
                                            <li className="footer-item">
                                                <Link to="/pages/faqs">
                                                    FAQS
                                                </Link>
                                            </li>
                                            <li className="footer-item">
                                                <Link to="/pages/policies">
                                                    Policies
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-col">
                                        <h5
                                            className="footer-title"
                                            onClick={handleOnClick}
                                        >
                                            MY ACCOUNT
                                            <img
                                                src={iconPlus}
                                                alt="icon-plus"
                                            />
                                        </h5>
                                        <ul className="footer-list">
                                            <li className="footer-item">
                                                <Link to="/login">
                                                    Login
                                                </Link>
                                            </li>
                                            <li className="footer-item">
                                                <Link to="/register">
                                                    Create Account
                                                </Link>
                                            </li>
                                            <li className="footer-item">
                                                <Link to="/cart">
                                                    My Shopping Cart
                                                </Link>
                                            </li>
                                            <li className="footer-item">
                                                <Link to="/pages/terms-conditions">
                                                    Terms & Conditions
                                                </Link>
                                            </li>
                                            <li className="footer-item">
                                                <Link to="/pages/wishlist">
                                                    Wishlist
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-col">
                                        <h5
                                            className="footer-title"
                                            onClick={handleOnClick}
                                        >
                                            CONTACT
                                            <img
                                                src={iconPlus}
                                                alt="icon-plus"
                                            />
                                        </h5>
                                        <ul className="footer-list">
                                            <li className="footer-item">
                                                <a href="mailto:phantronghau.dev@gmail.com">
                                                    <img
                                                        src={iconMail}
                                                        alt="icon-mail"
                                                    />
                                                    hello@okbutfirst.com
                                                </a>
                                            </li>
                                            <li className="footer-item">
                                                <a href="tel:732.927.1369">
                                                    <img
                                                        src={iconPhone}
                                                        alt="icon-phone"
                                                    />
                                                    732.927.1369
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="social-icon">
                                            <a
                                                href="https://www.instagram.com/okbfcoffee/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src={instagram}
                                                    alt="instagram-icon"
                                                />
                                            </a>
                                            <a
                                                href="https://twitter.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src={twitter}
                                                    alt="twitter-icon"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="site-footer__bottom">
                                <div className="item">
                                    <div className="footer-copyright">
                                        <p>
                                            Copyright © {year} Ok but first
                                            coffee - All rights reserved.
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="payment-methods">
                                        <div className="payment-methods__item">
                                            <img
                                                src={visa}
                                                alt="visa-payment"
                                            />
                                        </div>
                                        <div className="payment-methods__item">
                                            <img
                                                src={applePay}
                                                alt="apple-pay"
                                            />
                                        </div>
                                        <div className="payment-methods__item">
                                            <img
                                                src={americanExpress}
                                                alt="american-express"
                                            />
                                        </div>
                                        <div className="payment-methods__item">
                                            <img
                                                src={discover}
                                                alt="discover-banking"
                                            />
                                        </div>
                                        <div className="payment-methods__item">
                                            <img
                                                src={mastercard}
                                                alt="mastercard-payment"
                                            />
                                        </div>
                                        <div className="payment-methods__item">
                                            <img src={paypal} alt="paypal" />
                                        </div>
                                        <div className="payment-methods__item">
                                            <img src={shopPay} alt="shop-pay" />
                                        </div>
                                    </div>
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
