import { useEffect } from "react";
import "./Admin.scss";
import Breadcrumb from "../../Components/Breadcrumb";
import { Link } from "react-router-dom";

const Admin = () => {


    useEffect(() => {
        document.title = "Admin";
    }, []);

    return (
        <>
            <div className="admin">
                <div className="container">
                    <Breadcrumb breadcrumb="Admin" />

                    <div className="admin-wrapper">
                        <ul className="list">
                            <li className="item">
                                <Link to="/admin/products">
                                    Product Management
                                </Link>
                            </li>
                            <li className="item">
                                <Link to="/admin/order">List Order</Link>
                            </li>
                            <li className="item">
                                <Link to="/admin/question">
                                    Frequently Asked Questions
                                </Link>
                            </li>
                            <li className="item">
                                <Link to="/admin/blog">New Blog</Link>
                            </li>
                        </ul>

                        
                    </div>

                    
                </div>
            </div>
        </>
    );
};

export default Admin;
