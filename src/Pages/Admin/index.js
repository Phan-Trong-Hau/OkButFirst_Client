import { useEffect } from "react";
import "./Admin.scss";
import Breadcrumb from "../../Components/Breadcrumb";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../Context/AuthProvider";
import { Auth } from "../../Api/auth";

const Admin = () => {
  const { setAuth } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await Auth.logout();
      setAuth("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Admin";
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
                  <Link to="/admin/accounts">Accounts Manager</Link>
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
