import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb";
import "./Collection.scss";

const Collection = () => {
    const [countProducts, setCountProducts] = useState();
    const selector = useSelector((state) => state.products);

    useEffect(() => {
        setCountProducts(selector.length);
    }, [selector]);

    return (
        <>
            <main className="collection">
                <section>
                    <Breadcrumb breadcrumb="Collections" />
                </section>
                <section>
                    <div className="container">
                        <div className="collection-wrapper">
                            <div className="collection-title">
                                <h2>Collections</h2>
                            </div>
                            <div className="collection-content">
                                <div className="collection-list">
                                    <div className="collection-item">
                                        <h3 className="item-title">
                                            Coffee shop
                                        </h3>
                                        <div className="item-products">
                                            {countProducts} products
                                        </div>

                                        <Link
                                            to="/collections/coffee-shop"
                                            className="theme-btn__white"
                                        >
                                            Shop Now
                                        </Link>
                                    </div>
                                    <div className="collection-item">
                                        <h3 className="item-title">
                                            Merch shop
                                        </h3>
                                        <div className="item-products">
                                            products
                                        </div>
                                        <Link
                                            to="/collections/merch-shop"
                                            className="theme-btn__black"
                                        >
                                            Shop Now
                                        </Link>
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

export default Collection;
