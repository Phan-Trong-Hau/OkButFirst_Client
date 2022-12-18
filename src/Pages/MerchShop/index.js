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
    const [productsShow, setProductsShow] = useState([]);
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();
    const [filter, setFilter] = useState([]);

    const handleFilter = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        checked
            ? setFilter((prev) => [...prev, value])
            : setFilter(filter.filter((e) => e !== value));
    };

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
            setProductsShow(products);
        }
    }, [products]);

    useEffect(() => {
        if (filter.length === 0) {
            setProductsShow(products);
        } else {
            const temp = [];
            products.forEach((product) => {
                const findProduct = filter.some(
                    (e) =>
                        product.color.indexOf(e) >= 0 ||
                        product.size.indexOf(e) >= 0
                );

                if (findProduct) temp.push(product);
                else {
                    filter.forEach((e) => {
                        if (
                            e === "1" &&
                            product.price >= minPrice &&
                            product.price <
                                minPrice +
                                    Math.floor((maxPrice - minPrice) / 3 / 10) *
                                        10
                        ) {
                            temp.push(product);
                        } else if (
                            e === "2" &&
                            product.price >=
                                minPrice +
                                    Math.floor((maxPrice - minPrice) / 3 / 10) *
                                        10 &&
                            product.price <
                                minPrice +
                                    Math.floor(
                                        (((maxPrice - minPrice) / 3) * 2) / 10
                                    ) *
                                        10
                        ) {
                            temp.push(product);
                        } else if (
                            e === "3" &&
                            product.price >=
                                minPrice +
                                    Math.floor(
                                        (((maxPrice - minPrice) / 3) * 2) / 10
                                    ) *
                                        10 &&
                            product.price <= maxPrice
                        ) {
                            temp.push(product);
                        }
                    });
                }
                console.log(filter);

                setProductsShow(temp);
            });
        }
    }, [filter, maxPrice, minPrice, products]);

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
                                                        <input
                                                            type="checkbox"
                                                            value={"Black"}
                                                            onClick={
                                                                handleFilter
                                                            }
                                                        />
                                                        <span>Black</span>
                                                    </label>
                                                </li>
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            onClick={
                                                                handleFilter
                                                            }
                                                            value={"Gray"}
                                                        />
                                                        <span>Gray</span>
                                                    </label>
                                                </li>
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            onClick={
                                                                handleFilter
                                                            }
                                                            value={"Blue"}
                                                        />
                                                        <span>Blue</span>
                                                    </label>
                                                </li>
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            onClick={
                                                                handleFilter
                                                            }
                                                            value={
                                                                "Black Trucker"
                                                            }
                                                        />
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
                                                        <input
                                                            type="checkbox"
                                                            value={"S"}
                                                            onClick={
                                                                handleFilter
                                                            }
                                                        />
                                                        <span>S</span>
                                                    </label>
                                                </li>
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            value={"M"}
                                                            onClick={
                                                                handleFilter
                                                            }
                                                        />
                                                        <span>M</span>
                                                    </label>
                                                </li>
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            value={"L"}
                                                            onClick={
                                                                handleFilter
                                                            }
                                                        />
                                                        <span>L</span>
                                                    </label>
                                                </li>
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            value={"XL"}
                                                            onClick={
                                                                handleFilter
                                                            }
                                                        />
                                                        <span>XL</span>
                                                    </label>
                                                </li>
                                                <li className="sidebar-item">
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            value={"ADJUSTABLE"}
                                                            onClick={
                                                                handleFilter
                                                            }
                                                        />
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
                                                        <input
                                                            type="checkbox"
                                                            value={"1"}
                                                            onClick={
                                                                handleFilter
                                                            }
                                                        />
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
                                                        <input
                                                            type="checkbox"
                                                            value={"2"}
                                                            onClick={
                                                                handleFilter
                                                            }
                                                        />
                                                        <span>
                                                            {minPrice +
                                                                Math.floor(
                                                                    (maxPrice -
                                                                        minPrice) /
                                                                        3 /
                                                                        10
                                                                ) *
                                                                    10}
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
                                                        <input
                                                            type="checkbox"
                                                            value={"3"}
                                                            onClick={
                                                                handleFilter
                                                            }
                                                        />
                                                        <span>
                                                            {minPrice +
                                                                Math.floor(
                                                                    (((maxPrice -
                                                                        minPrice) /
                                                                        3) *
                                                                        2) /
                                                                        10
                                                                ) *
                                                                    10}
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
                                data={productsShow}
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
