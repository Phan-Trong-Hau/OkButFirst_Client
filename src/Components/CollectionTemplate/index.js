import { useEffect, useState } from "react";

import Card from "../Card";
import "./CollectionTemplate.scss";

import GridSVG from "../../Assets/svg/grid.svg";

const CollectionTemplate = ({ data, defineSort = "title-ascending" }) => {
    const [view, setView] = useState("grid");
    const [sortBy, setSortBy] = useState(defineSort);
    const [products, setProducts] = useState(data);

    const handleOnChangeSort = (e) => {
        const value = e.target.value;
        setSortBy(value);
    };

    const handleOnChangeView = (e) => {
        const value = e.target.value;
        setView(value);
    };

    const changeSort = (sortBy, listProduct) => {
        const listData = [...listProduct];
        switch (sortBy) {
            case "best-selling":
                setProducts((prev) => {
                    const list = [...prev];
                    return list?.sort((a, b) => {
                        return b.price < a.price ? 1 : -1;
                    });
                });
                break;
            case "title-ascending":
                setProducts((prev) => {
                    const list = [...prev];
                    return list?.sort((a, b) => {
                        return b.name.trim().toLowerCase() <
                            a.name.trim().toLowerCase()
                            ? 1
                            : -1;
                    });
                });
                break;
            case "title-descending":
                setProducts((prev) => {
                    const list = [...prev];
                    return list?.sort((a, b) => {
                        return b.name.trim().toLowerCase() >
                            a.name.trim().toLowerCase()
                            ? 1
                            : -1;
                    });
                });
                break;
            case "price-ascending":
                setProducts((prev) => {
                    const list = [...prev];
                    return list?.sort((a, b) => {
                        return b.price < a.price ? 1 : -1;
                    });
                });
                break;
            case "price-descending":
                setProducts((prev) => {
                    const list = [...prev];
                    return list?.sort((a, b) => {
                        return b.price > a.price ? 1 : -1;
                    });
                });
                break;
            case "created-ascending":
                setProducts(listData);
                break;
            case "created-descending":
                setProducts(listData.reverse());
                break;
            default:
                setProducts(listData);
                break;
        }
    };

    useEffect(() => {
        setProducts(data);
    }, [data]);
    useEffect(() => {
        changeSort(sortBy, data);
    }, [data, sortBy]);
    const productItems = products?.map((product, index) => {
        return (
            <div className="product-item" key={index}>
                <Card
                    img={product.imageDisplay}
                    title={product.name}
                    price={product.price.toFixed(2)}
                    newBadge={product.newBadge}
                    desc={
                        view === "list" && product.discription
                            ? product.discription[0]
                            : view === "list"
                            ? product.description
                            : ""
                    }
                />
            </div>
        );
    });

    return (
        <>
            <div className="collection-template">
                <div className="collection-toolbar">
                    <div className="toolbar-wrapper">
                        <div className="view-product">
                            <span>view as</span>
                            <button
                                value={"grid"}
                                onClick={handleOnChangeView}
                                className={
                                    view === "grid"
                                        ? "view-grid view-input active"
                                        : "view-grid view-input"
                                }
                            >
                                <img src={GridSVG} alt="icon-grid-svg" />
                            </button>
                            <button
                                onClick={handleOnChangeView}
                                value={"list"}
                                className={
                                    view === "list"
                                        ? "view-list view-input active"
                                        : "view-list view-input"
                                }
                            ></button>
                        </div>
                        <div className="sort-product">
                            <span>Sort by</span>
                            <div className="select-group">
                                <select
                                    name="sort-by"
                                    id="SortBy"
                                    value={sortBy}
                                    onChange={handleOnChangeSort}
                                >
                                    <option value="best-selling">
                                        Best selling
                                    </option>
                                    <option value="title-ascending">
                                        Alphabetically, A-Z
                                    </option>
                                    <option value="title-descending">
                                        Alphabetically, Z-A
                                    </option>
                                    <option value="price-ascending">
                                        Price, low to high
                                    </option>
                                    <option value="price-descending">
                                        Price, high to low
                                    </option>
                                    <option value="created-ascending">
                                        Date, old to new
                                    </option>
                                    <option value="created-descending">
                                        Date, new to old
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collection-product">
                    <div
                        className={
                            view === "list" ? "product-list" : "product-grid"
                        }
                    >
                        {productItems}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CollectionTemplate;
