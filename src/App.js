import { useContext } from "react";
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
import ProductManager from "./Pages/Manager/Product";

function App() {
    const { auth, isBusy } = useContext(AuthContext);
    const role = auth?.user?.role === "admin";

    const ProtectedRoute = ({ check, path, children }) => {
        return check ? children : <Navigate to={path} replace />;
    };

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
                                path="products"
                                element={
                                    <ProtectedRoute check={role} path="/">
                                        <ProductManager />
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
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </Router>
            )}
        </div>
    );
}

export default App;
