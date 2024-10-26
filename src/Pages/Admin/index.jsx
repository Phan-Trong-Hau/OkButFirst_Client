import { useEffect } from "react";
import "./Admin.scss";
import Breadcrumb from "../../Components/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../Context/AuthProvider";
import { Auth } from "../../Api/auth";

const Admin = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await Auth.logout();
      setAuth("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Admin | OKBF";
  }, []);

  return (
    <>
      <main className="admin">
        <section>
          <Breadcrumb breadcrumb="Admin" />
        </section>
        <section>
          <div className="container">
            <div className="admin-wrapper">
              <ul className="list">
                <li className="item">
                  <Link to="/admin/order">List Order</Link>
                </li>
                <li className="item">
                  <Link to="/admin/coffee-shop">Coffee Shop</Link>
                </li>
                <li className="item">
                  <Link to="/admin/merch-shop">Merch Shop</Link>
                </li>
                <li className="item">
                  <Link to="/admin/question">Frequently Asked Questions</Link>
                </li>
                <li className="item">
                  <Link to="/admin/blog">New Blog</Link>
                </li>
                <li className="item">
                  <Link to="/admin/account-management">Account Management</Link>
                </li>
                <li className="item">
                  <Link to="#" onClick={handleLogout}>
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Admin;
