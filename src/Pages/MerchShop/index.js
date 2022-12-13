import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "../../Components/Breadcrumb";
import CollectionTemplate from "../../Components/CollectionTemplate";
import "./MerchShop.scss";

import arrowDown from "../../Assets/svg/arrowDown.svg";

const MerchShop = () => {
    const selector = useSelector((state) => state.merch);
    const [products, setProducts] = useState([]);
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();

    useEffect(() => {
        setProducts(selector);
    }, [selector]);

    useEffect(() => {
        if (products.length) {
            const dataMin = products?.reduce((prev, curr) =>
                prev.price < curr.price ? prev : curr
            );
            const dataMax = products?.reduce((prev, curr) =>
                prev.price > curr.price ? prev : curr
            );
            setMinPrice(Math.floor(dataMin.price / 10) * 10);
            setMaxPrice(Math.ceil(dataMax.price / 10) * 10);
        }
    }, [products]);

    return (
        <>
            <main className="merch-shop">
                <section>
                    <Breadcrumb breadcrumb="Coffee Company For Cool Merch Products Online | OKBF" />
                </section>

                <section>
                    <div className="container">
                        <div className="merch-shop-wrapper">
                            <div className="sidebar">
                                <div className="sidebar-wrapper">
                                    <div className="sidebar-group">
                                        <div className="sidebar-heading">
                                            <h3>
                                                <img
                                                    src={arrowDown}
                                                    alt="arrow-down"
                                                />
                                                Categories
                                            </h3>
                                        </div>
                                        <div className="sidebar-content">
                                            <ul className="sidebar-list">
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            checked={true}
                                                            readOnly={true}
                                                        />
                                                        <span>Merch</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-group">
                                        <div className="sidebar-heading">
                                            <h3>
                                                <img
                                                    src={arrowDown}
                                                    alt="arrow-down"
                                                />
                                                Color
                                            </h3>
                                        </div>
                                        <div className="sidebar-content">
                                            <ul className="sidebar-list">
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span>Black</span>
                                                    </label>
                                                </li>
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span>Gray</span>
                                                    </label>
                                                </li>
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span>Blue</span>
                                                    </label>
                                                </li>
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span>
                                                            Black Trucker
                                                        </span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-group">
                                        <div className="sidebar-heading">
                                            <h3>
                                                <img
                                                    src={arrowDown}
                                                    alt="arrow-down"
                                                />
                                                Size
                                            </h3>
                                        </div>
                                        <div className="sidebar-content">
                                            <ul className="sidebar-list">
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span>S</span>
                                                    </label>
                                                </li>
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span>M</span>
                                                    </label>
                                                </li>
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span>L</span>
                                                    </label>
                                                </li>
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span>XL</span>
                                                    </label>
                                                </li>
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span>ADJUSTABLE</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-group">
                                        <div className="sidebar-heading">
                                            <h3>
                                                <img
                                                    src={arrowDown}
                                                    alt="arrow-down"
                                                />
                                                Price
                                            </h3>
                                        </div>
                                        <div className="sidebar-content">
                                            <ul className="sidebar-list">
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span>
                                                            {minPrice}$ -
                                                            {minPrice +
                                                                Math.floor(
                                                                    (maxPrice -
                                                                        minPrice) /
                                                                        3 /
                                                                        10
                                                                ) *
                                                                    10}
                                                            $
                                                        </span>
                                                    </label>
                                                </li>
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span>
                                                            {minPrice +
                                                                Math.floor(
                                                                    (maxPrice -
                                                                        minPrice) /
                                                                        3 /
                                                                        10
                                                                ) *
                                                                    10 +
                                                                1}
                                                            $ -
                                                            {minPrice +
                                                                Math.floor(
                                                                    (((maxPrice -
                                                                        minPrice) /
                                                                        3) *
                                                                        2) /
                                                                        10
                                                                ) *
                                                                    10}
                                                            $
                                                        </span>
                                                    </label>
                                                </li>
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span>
                                                            {minPrice +
                                                                Math.floor(
                                                                    (((maxPrice -
                                                                        minPrice) /
                                                                        3) *
                                                                        2) /
                                                                        10
                                                                ) *
                                                                    10 +
                                                                1}
                                                            $ -{maxPrice}$
                                                        </span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CollectionTemplate
                                data={products}
                                defineSort={"best-selling"}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default MerchShop;
