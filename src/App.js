import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AuthContext from "./Context/AuthProvider";
import Account from "./Pages/Account";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import LoadingSpinner from "./Components/Loading";
import NotFound from "./Pages/NotFound";
import Admin from "./Pages/Admin";
import CoffeeShopManager from "./Pages/Manager/CoffeeShop";
import { fetchAllProducts } from "./redux/slice/products";
import Collection from "./Pages/Collection";
import CoffeeShop from "./Pages/CoffeeShop";
import MerchShop from "./Pages/MerchShop";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import CoffeeClub from "./Pages/CoffeeClub";
import Policies from "./Pages/Policies";
import BlogCoffee from "./Pages/Blogs/BlogCoffee";

function App() {
    const { auth, isBusy } = useContext(AuthContext);
    const dispatch = useDispatch();

    const role = auth?.user?.role === "admin";

    const ProtectedRoute = ({ check, path, children }) => {
        return check ? children : <Navigate to={path} replace />;
    };

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    return (
        <div className="App">
            {isBusy ? (
                <LoadingSpinner />
            ) : (
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route
                            path="/account"
                            element={
                                <ProtectedRoute
                                    check={auth.loggedIn}
                                    path={"/login"}
                                >
                                    <ProtectedRoute
                                        check={!role}
                                        path={"/admin"}
                                    >
                                        <Account />
                                    </ProtectedRoute>
                                </ProtectedRoute>
                            }
                        ></Route>
                        <Route
                            path="/login"
                            element={
                                <ProtectedRoute
                                    check={!auth.loggedIn}
                                    path="/account"
                                >
                                    <Login />
                                </ProtectedRoute>
                            }
                        ></Route>
                        <Route
                            path="/register"
                            element={
                                <ProtectedRoute
                                    check={!auth.loggedIn}
                                    path="/account"
                                >
                                    <Login />
                                </ProtectedRoute>
                            }
                        ></Route>
                        <Route path="/admin">
                            <Route
                                path="coffee-shop"
                                element={
                                    <ProtectedRoute check={role} path="/">
                                        <CoffeeShopManager />
                                    </ProtectedRoute>
                                }
                            ></Route>
                            <Route
                                index
                                element={
                                    <ProtectedRoute check={role} path="/">
                                        <Admin />
                                    </ProtectedRoute>
                                }
                            ></Route>
                        </Route>
                        <Route path="/products">
                            <Route
                                path="coffee-club-subscription"
                                element={<CoffeeClub />}
                            ></Route>
                            <Route index element={<Collection />}></Route>
                        </Route>
                        <Route path="/collections">
                            <Route
                                path="coffee-shop"
                                element={<CoffeeShop />}
                            ></Route>
                            <Route
                                path="merch-shop"
                                element={<MerchShop />}
                            ></Route>
                            <Route index element={<Collection />}></Route>
                        </Route>
                        <Route path="/pages">
                            <Route
                                path="about-us"
                                element={<AboutUs />}
                            ></Route>
                            <Route
                                path="contact-us"
                                element={<ContactUs />}
                            ></Route>
                            <Route
                                path="policies"
                                element={<Policies title={"Policies"} />}
                            ></Route>
                            <Route
                                path="terms-conditions"
                                element={
                                    <Policies title={"Terms Conditions"} />
                                }
                            ></Route>
                        </Route>
                        <Route path="/blogs">
                            <Route
                                path="coffee-101"
                                element={<BlogCoffee />}
                            ></Route>
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </Router>
            )}
        </div>
    );
}

export default App;
