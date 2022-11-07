import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Breadcrumb from "../../Components/Breadcrumb";
import AuthContext from "../../Context/AuthProvider";
import api from "../../utils/apiCaller";
import "./login.scss";

const Login = () => {
    const { setAuth } = useContext(AuthContext);

    const navigate = useNavigate();
    const [post, setPost] = useState("");
    const [post1, setPost1] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "email") setEmail(value);
        if (name === "username") setUsername(value);
        if (name === "password") setPassword(value);
        if (name === "confirmPassword") setConfirmPassword(value);
    };

    const handleOnClickRemember = () => setRemember(!remember);

    const handleSignup = (e) => {
        e.preventDefault();

        api.post("/auth/signup", {
            username,
            email,
            password,
            confirmPassword,
        })
            .then((res) => {
                setPost(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(setPost("Loading....."));
    };

    const handleLogin = (e) => {
        e.preventDefault();

        api.post("/auth/login", {
            username,
            password,
            remember,
        })
            .then((res) => {
                setPost1(res.data.message);
                if (res.data.loggedIn) {
                    setAuth(res.data);
                    navigate("/account");
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(setPost1("Loading....."));
    };

    useEffect(() => {
        document.title = "Create Account";
    }, []);

    return (
        <>
            <main>
                <section>
                    <Breadcrumb breadcrumb="Account" />
                </section>
                <section>
                    <div className="container">
                        <div className="page-account">
                            <div className="page-account__row">
                                <div className="page-login">
                                    <div className="section-header">
                                        <h2>My Account</h2>
                                    </div>
                                    <div className="form-vertical">
                                        <div className="form-title">
                                            <h3>RETURNING CUSTOMER</h3>
                                            <p className="form-title__des">
                                                I am a returning customer
                                            </p>
                                        </div>
                                        <form
                                            className="form-content"
                                            onSubmit={handleLogin}
                                            acceptCharset="UTF-8"
                                        >
                                            <input
                                                type="hidden"
                                                name="utf8"
                                                value={"✓"}
                                            />
                                            <div className="form-group">
                                                <label htmlFor="username">
                                                    Username or Email *
                                                </label>
                                                <input
                                                    id="username"
                                                    type="text"
                                                    name="username"
                                                    autoComplete="off"
                                                    onChange={handleOnChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">
                                                    Password *
                                                </label>
                                                <input
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    autoComplete="off"
                                                    onChange={handleOnChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <p>{post1}</p>
                                            </div>

                                            <div className="actions">
                                                <div className="action-group">
                                                    <div className="action__remember">
                                                        <input
                                                            type="checkbox"
                                                            id="customCheck2"
                                                            onClick={
                                                                handleOnClickRemember
                                                            }
                                                        />
                                                        <label htmlFor="customCheck2">
                                                            Remember me
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="action-group">
                                                    <input
                                                        type="submit"
                                                        className="theme-btn__black"
                                                        value="Login"
                                                    ></input>
                                                </div>
                                                <div className="action-group">
                                                    <Link to="/login#recover">
                                                        Forgot your password?
                                                    </Link>
                                                    <span> or </span>
                                                    <Link to="/">
                                                        Return to Store
                                                    </Link>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="page-register">
                                    <div className="page-register__wrapper">
                                        <div className="form-vertical">
                                            <div className="form-title">
                                                <h3>NEW CUSTOMER</h3>
                                                <p className="form-title__des">
                                                    Register Account By creating
                                                    an account you will be able
                                                    to shop faster, be up to
                                                    date on an order's status,
                                                    and keep track of the orders
                                                    you have previously made.
                                                </p>
                                            </div>
                                            <form
                                                className="form-content"
                                                onSubmit={handleSignup}
                                                acceptCharset='UTF-8'
                                            >
                                                <input
                                                    type="hidden"
                                                    name="utf8"
                                                    value={"✓"}
                                                />
                                                <div className="form-group">
                                                    <label htmlFor="createCustomer_username">
                                                        Username <em>*</em>
                                                    </label>
                                                    <input
                                                        id="createCustomer_username"
                                                        type="text"
                                                        name="username"
                                                        autoComplete="off"
                                                        onChange={
                                                            handleOnChange
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="createCustomer_email">
                                                        Email <em>*</em>
                                                    </label>
                                                    <input
                                                        id="createCustomer_email"
                                                        type="email"
                                                        name="email"
                                                        autoComplete="off"
                                                        onChange={
                                                            handleOnChange
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="createCustomer_password">
                                                        Password <em>*</em>
                                                    </label>
                                                    <input
                                                        id="createCustomer_password"
                                                        type="password"
                                                        name="password"
                                                        autoComplete="off"
                                                        onChange={
                                                            handleOnChange
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="createCustomer_confirmPassword">
                                                        Confirm Password{" "}
                                                        <em>*</em>
                                                    </label>
                                                    <input
                                                        id="createCustomer_confirmPassword"
                                                        type="password"
                                                        name="confirmPassword"
                                                        autoComplete="off"
                                                        onChange={
                                                            handleOnChange
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <p
                                                        style={
                                                            post.search(
                                                                "successfully"
                                                            ) === -1
                                                                ? {
                                                                      color: "red",
                                                                  }
                                                                : {
                                                                      color: "green",
                                                                  }
                                                        }
                                                    >
                                                        {post}
                                                    </p>
                                                </div>
                                                <div className="actions">
                                                    <div className="action-group">
                                                        <input
                                                            type="submit"
                                                            className="theme-btn__black"
                                                            value="Create Account"
                                                        ></input>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Login;
