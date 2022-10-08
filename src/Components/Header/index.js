import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState, useContext } from "react";

import "./Header.scss";
import api from "../../utils/apiCaller";
import AuthContext from "../../Context/AuthProvider";
import logo from "../../Assets/svg/logo.svg";
import user from "../../Assets/svg/user.svg";
import cart from "../../Assets/svg/cart.svg";
import search from "../../Assets/svg/search.svg";
import iconUser from "../../Assets/svg/iconUser.svg";
import iconHeart from "../../Assets/svg/iconHeart.svg";
import iconClose from "../../Assets/svg/iconClose.svg";
import arrowDown from "../../Assets/svg/arrowDown.svg";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { auth, setAuth } = useContext(AuthContext);

    const [y, setY] = useState(window.scrollY);
    const [width, setWidth] = useState(window.innerWidth);
    const [showMenu, setShowMenu] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [post, setPost] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    };
    const handleNavigation = useCallback((e) => {
        const window = e.currentTarget;
        setY(window.scrollY);
    }, []);

    const handleShowMenu = () => {
        if (width < 1024) {
            if (showMenu) setShowMore(false);
            handleOff();
            setShowMenu(!showMenu);
        }
    };

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    const handleShowSearch = () => {
        handleOff();
        setShowSearch(!showSearch);
    };

    const handleShowLogin = () => {
        const URL = location.pathname;
        handleOff();
        if (
            !URL.includes("register") &&
            !URL.includes("login") &&
            !auth.loggedIn
        )
            setShowLogin(!showLogin);
    };

    const handleOff = () => {
        setShowSearch(false);
        setShowMenu(false);
        setShowLogin(false);
        setPost("");
        setUsername("");
        setPassword("");
    };

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "password") setPassword(value);
        if (name === "username") setUsername(value);
    };
    const handleOnClickRemember = () => setRemember(!remember);

    const handleLogin = (e) => {
        e.preventDefault();

        api.post("/auth/login", {
            username,
            password,
            remember,
        })
            .then((res) => {
                console.log(res);
                setPost(res.data.message);
                if (res.data.loggedIn) {
                    setAuth(res.data);
                    handleOff();
                    navigate("/account");
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally();
    };

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return (
        <>
            <header>
                <div className="header">
                    <div className="announcement-bar">
                        <div className="container">
                            <div className="announcement-bar__message">
                                <p> Free shipping for all orders over $40!</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            (width > 1024 && y >= 120) ||
                            (width < 1024 && y >= 60)
                                ? "site-header is-sticky"
                                : "site-header"
                        }
                    >
                        <div className="container">
                            <div className="header-middle">
                                <div className="header-middle__left">
                                    <div
                                        className={
                                            showMenu
                                                ? "header-aside is-show"
                                                : "header-aside"
                                        }
                                    >
                                        <ul className="list">
                                            <li className="item">
                                                <Link
                                                    to="/collections/coffee-shop"
                                                    onClick={handleShowMenu}
                                                >
                                                    Coffee
                                                </Link>
                                            </li>
                                            <li className="item">
                                                <Link
                                                    to="/collections/merch-shop"
                                                    onClick={handleShowMenu}
                                                >
                                                    Merch
                                                </Link>
                                            </li>
                                            <li className="item">
                                                <Link
                                                    to="/products/coffee-club-subscription"
                                                    onClick={handleShowMenu}
                                                >
                                                    Coffee Club
                                                </Link>
                                            </li>
                                            <li className="item hide_mb"></li>
                                            <li className="item">
                                                <Link
                                                    to="/blogs/coffee-101"
                                                    onClick={handleShowMenu}
                                                >
                                                    Coffee 101
                                                </Link>
                                            </li>
                                            <li className="item">
                                                <Link
                                                    to="#"
                                                    onClick={handleShowMore}
                                                >
                                                    More
                                                    <img
                                                        src={arrowDown}
                                                        alt="arrow-down-icon"
                                                    ></img>
                                                </Link>
                                                <div
                                                    className={
                                                        showMore
                                                            ? "menu is-show"
                                                            : "menu"
                                                    }
                                                >
                                                    <ul className="menu-list">
                                                        <li className="menu-item hide_pc">
                                                            <Link
                                                                to="#"
                                                                onClick={
                                                                    handleShowMore
                                                                }
                                                            >
                                                                <img
                                                                    src={
                                                                        arrowDown
                                                                    }
                                                                    alt="arrow-down-icon"
                                                                />
                                                                <span>
                                                                    More
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className="menu-item hide_pc">
                                                            <Link to="#">
                                                                <span>
                                                                    All More
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link
                                                                to="/pages/about-us"
                                                                onClick={
                                                                    handleShowMenu
                                                                }
                                                            >
                                                                <span>
                                                                    About Us
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link
                                                                to="/pages/contact-us"
                                                                onClick={
                                                                    handleShowMenu
                                                                }
                                                            >
                                                                <span>
                                                                    Contact Us
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link
                                                                to="/pages/faqs"
                                                                onClick={
                                                                    handleShowMenu
                                                                }
                                                            >
                                                                <span>FAQ</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="item hide_pc">
                                                <Link
                                                    to="/login"
                                                    onClick={handleShowMenu}
                                                >
                                                    <img
                                                        className="icon-start"
                                                        src={iconUser}
                                                        alt="icon-user"
                                                    />
                                                    Customer Login
                                                </Link>
                                            </li>
                                            <li className="item hide_pc">
                                                <Link
                                                    to="/pages/wishlist"
                                                    onClick={handleShowMenu}
                                                >
                                                    <img
                                                        className="icon-start"
                                                        src={iconHeart}
                                                        alt="icon-user"
                                                    />
                                                    Wishlist
                                                </Link>
                                            </li>
                                        </ul>
                                        <div
                                            className="icon-close hide_pc"
                                            onClick={handleShowMenu}
                                        >
                                            <img
                                                src={iconClose}
                                                alt="icon-close"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="header-middle__logo">
                                    <Link to="/">
                                        <img
                                            src={logo}
                                            alt="OK-But-First-Coffee"
                                            title="OK But First Coffee"
                                        />
                                    </Link>
                                </div>
                                <div className="header-middle__right">
                                    <div className="header-middle__item">
                                        <div
                                            className="menu-toggle"
                                            onClick={handleShowMenu}
                                        >
                                            <span className="toggle-icon"></span>
                                        </div>
                                    </div>
                                    <div className="header-middle__item">
                                        <Link to="#" onClick={handleShowSearch}>
                                            <img
                                                src={
                                                    showSearch
                                                        ? iconClose
                                                        : search
                                                }
                                                alt={
                                                    showSearch
                                                        ? "close-icon"
                                                        : "search-icon"
                                                }
                                                style={
                                                    showSearch
                                                        ? {
                                                              filter: "opacity(0.5) drop-shadow(0 0 0 black)",
                                                              width: "30px",
                                                          }
                                                        : {}
                                                }
                                            />
                                        </Link>
                                    </div>
                                    <div className="hide_pc"></div>
                                    <div className="header-middle__item">
                                        <Link to="/">
                                            <img src={cart} alt="cart-icon" />
                                        </Link>
                                    </div>
                                    <div className="header-middle__item">
                                        <Link
                                            to={
                                                auth.loggedIn ? "/account" : "#"
                                            }
                                            onClick={handleShowLogin}
                                        >
                                            <img src={user} alt="user-icon" />
                                        </Link>
                                        <div
                                            className="header-middle__login"
                                            style={
                                                showLogin
                                                    ? {
                                                          visibility: "visible",
                                                          opacity: 1,
                                                      }
                                                    : {}
                                            }
                                        >
                                            <div
                                                className={
                                                    showLogin
                                                        ? "login-wrapper is-show"
                                                        : "login-wrapper"
                                                }
                                            >
                                                <div className="login-header">
                                                    <h2 className="title">
                                                        My Account
                                                    </h2>
                                                    <button
                                                        onClick={
                                                            handleShowLogin
                                                        }
                                                    >
                                                        <img
                                                            src={iconClose}
                                                            alt="icon-close"
                                                        />
                                                    </button>
                                                </div>
                                                <div className="login-content">
                                                    <form
                                                        className="login-form"
                                                        onSubmit={handleLogin}
                                                    >
                                                        <div className="login-input">
                                                            <input
                                                                id="customer_username"
                                                                type="text"
                                                                name="username"
                                                                placeholder="Enter Username or Email"
                                                                autoComplete="off"
                                                                onChange={
                                                                    handleOnChange
                                                                }
                                                                value={username}
                                                            />
                                                        </div>
                                                        <div className="login-input">
                                                            <input
                                                                id="customer_password"
                                                                type="password"
                                                                name="password"
                                                                placeholder="Enter Password"
                                                                autoComplete="off"
                                                                onChange={
                                                                    handleOnChange
                                                                }
                                                                value={password}
                                                            />
                                                        </div>
                                                        <div className="login-actions">
                                                            <div className="action-group">
                                                                <div className="action__remember">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="customCheck1"
                                                                        onClick={
                                                                            handleOnClickRemember
                                                                        }
                                                                    />
                                                                    <label htmlFor="customCheck1">
                                                                        Remember
                                                                        me
                                                                    </label>
                                                                </div>
                                                                <Link to="/login#recover">
                                                                    Forgot your
                                                                    password?
                                                                </Link>
                                                            </div>
                                                            <div className="action-group">
                                                                <p className="message">
                                                                    {post}
                                                                </p>
                                                            </div>
                                                            <div className="action-group">
                                                                <input
                                                                    type="submit"
                                                                    className="theme-btn__white"
                                                                    value="Login"
                                                                ></input>
                                                            </div>
                                                            <div className="action-group">
                                                                <Link
                                                                    to="/register"
                                                                    className="theme-btn__black"
                                                                    onClick={
                                                                        handleShowLogin
                                                                    }
                                                                >
                                                                    Create
                                                                    Account
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="header-middle__search"
                                    style={
                                        showSearch
                                            ? {
                                                  visibility: "visible",
                                                  opacity: 1,
                                              }
                                            : {}
                                    }
                                >
                                    <div className="search-wrapper">
                                        <form
                                            action="/"
                                            className="search-form wrapper-input"
                                        >
                                            <input
                                                type="text"
                                                name="q"
                                                placeholder="Search for a product..."
                                                className="search-form__input"
                                                aria-label="Search Site"
                                                autoComplete="off"
                                            ></input>
                                            <span className="focus-border">
                                                <i></i>
                                            </span>
                                            <button
                                                type="submit"
                                                className="btn-search"
                                            >
                                                <img
                                                    src={search}
                                                    alt="icon-search"
                                                />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            showMenu || showSearch || showLogin
                                ? "background-overlay"
                                : ""
                        }
                        onClick={handleOff}
                    ></div>
                </div>
            </header>
        </>
    );
};

export default Header;
