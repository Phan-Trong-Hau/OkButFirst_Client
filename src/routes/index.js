import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Account from "../Pages/Account";
import NotFound from "../Pages/NotFound";
import BlogCoffee from "../Pages/Blogs/BlogCoffee";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Policies from "../Pages/Policies";
import Collection from "../Pages/Collection";
import MerchShop from "../Pages/MerchShop";
import CoffeeShop from "../Pages/CoffeeShop";
import Admin from "../Pages/Admin";
import CoffeeShopManagement from "../Pages/Management/CoffeeShop";
import MerchShopManagement from "../Pages/Management/MerchShop";
import AccountManagement from "../Pages/Management/Account";
import CoffeeClub from "../Pages/CoffeeClub";
import { useContext } from "react";
import AuthContext from "../Context/AuthProvider";

const RouterApp = () => {
  const { auth } = useContext(AuthContext);

  const isAdmin = auth.user?.isAdmin;
  const isLogin = auth.loggedIn;

  // public methods
  const routersPublic = [
    { path: "/", element: <Home /> },
    { path: "/products/coffee-club-subscription", element: <CoffeeClub /> },
    { path: "/products", element: <Collection /> },
    { path: "/collections/merch-shop/:id", element: <Home /> },
    { path: "/collections/merch-shop", element: <MerchShop /> },
    { path: "/collections/coffee-shop/:id", element: <Home /> },
    { path: "/collections/coffee-shop", element: <CoffeeShop /> },
    { path: "/collections", element: <Collection /> },
    { path: "/pages/policies", element: <Policies title={"Policies"} /> },
    {
      path: "/pages/terms-conditions",
      element: <Policies title={"Terms Conditions"} />,
    },
    { path: "/pages/about-us", element: <AboutUs /> },
    { path: "/pages/contact-us", element: <ContactUs /> },
    { path: "/blogs/coffee-101", element: <BlogCoffee /> },
    { path: "*", element: <NotFound /> },
  ];

  // navigate methods
  const routersNavigate = [
    {
      path: "/login",
      element: !isLogin ? <Login /> : <Navigate to="/account" replace />,
    },
    {
      path: "/register",
      element: !isLogin ? <Login /> : <Navigate to="/account" replace />,
    },
    // should be check "if else" or write function handle
    // shouldn't use ternary operator because it's not clear
    {
      path: "/account",
      element: isLogin ? (
        !isAdmin ? (
          <Account />
        ) : (
          <Navigate to="/admin" replace />
        )
      ) : (
        <Navigate to="/login" replace />
      ),
    },
  ];

  // private methods
  const routersPrivate = [
    { path: "/admin/account-management", element: <AccountManagement /> },
    { path: "/admin/coffee-shop", element: <CoffeeShopManagement /> },
    { path: "/admin/merch-shop", element: <MerchShopManagement /> },
    { path: "/admin", element: <Admin /> },
  ];

  const routers = [...routersPublic, ...routersNavigate];

  if (isAdmin) routers.push(...routersPrivate);

  return (
    <Routes>
      {routers.map((router) => {
        return <Route path={router.path} element={router.element} />;
      })}
    </Routes>
  );
};

export default RouterApp;
