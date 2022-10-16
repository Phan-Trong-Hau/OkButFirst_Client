import { useState } from "react";

import Breadcrumb from "../../../Components/Breadcrumb";
import api from "../../../utils/apiCaller";
import "./Product.scss";

const ProductManager = () => {
    const [previewSource, setPreviewSource] = useState([]);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productDesc, setProductDesc] = useState('');
    const [productNew, setProductNew] = useState(true);

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "productName") setProductName(value);
        if (name === "productPrice") setProductPrice(value);
        if (name === "productDesc") setProductDesc(value);
        if (name === "productNew") setProductNew(value);
    };

    const handleOnChangeFile = (e) => {
        const file = Array.from(e.target.files);
        console.log(file);
        file.forEach((element) => {
            previewFile(element);
        });
    };

    const handleSubmitProduct = (e) => {
        e.preventDefault();
        if (previewSource.length === 0) {
            alert("Ban chưa chọn file");
            return;
        }
        uploadData();
    };

    const uploadData = async () => {
        try {
            const res = await api.post("/v1/products", {
                productName,
                productPrice,
                productDesc,
                previewSource,
                productNew,
            })
            alert(res.data?.message);
            setProductName('');
            setProductDesc('');
            setProductPrice(0);
            setPreviewSource([]);
        } catch (error) {
            console.log(error);
        }
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource((prev) => {
                return prev.concat(reader.result);
            });
        };
    };

    const listImg = previewSource?.map((e, index) => (
        <img
            key={index}
            src={e}
            alt="chose"
            style={{ height: "70px", margin: "20px" }}
        />
    ));

    return (
        <>
            <div className="product-manager">
                <Breadcrumb
                    breadcrumb="Product Management"
                    list={[{ title: "Admin", path: "/admin" }]}
                />
                <div className="container">
                    <div className="product-manager-wrapper">
                        <div className="list-products">
                            <h3 className="product-title">List Of Products</h3>
                            <div className="product-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Name Product</th>
                                            <th>Price</th>
                                            <th>Description</th>
                                            <th>Image</th>
                                            <th>New</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>11</td>
                                            <td>11</td>
                                            <td>11</td>
                                            <td>11</td>
                                            <td>11</td>
                                            <td>11</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="create-product">
                            <h3 className="product-title">
                                Create New Product
                            </h3>
                            <form
                                onSubmit={handleSubmitProduct}
                                className="product-form"
                            >
                                <label>
                                    <span>Enter Name Product: </span>
                                    <input
                                        type="text"
                                        name="productName"
                                        onChange={handleOnChange}
                                        value={productName}
                                    />
                                </label>

                                <label>
                                    <span>Enter Price Product: </span>
                                    <input
                                        type="number"
                                        name="productPrice"
                                        onChange={handleOnChange}
                                        step="1.0"
                                        min="0"
                                        value={productPrice}
                                    />
                                </label>
                                <label>
                                    <span>Enter Product Description: </span>
                                    <textarea
                                        rows="10"
                                        onChange={handleOnChange}
                                        name="productDesc"
                                        value={productDesc}
                                    ></textarea>
                                </label>
                                <label>
                                    <input
                                        type="file"
                                        multiple
                                        onChange={handleOnChangeFile}
                                        name="productImage"
                                        style={{ display: "none" }}
                                    />
                                    <span>Chose file</span>
                                    <div className="show-img">{listImg}</div>
                                </label>

                                <div className="input-radio">
                                    <div>New Product</div>
                                    <label>
                                        <input
                                            type="radio"
                                            name="productNew"
                                            defaultChecked
                                            value={true}
                                            onChange={handleOnChange}
                                        />
                                        <span>Yes</span>
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="productNew"
                                            value={false}
                                            onChange={handleOnChange}
                                        />
                                        <span>No</span>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="theme-btn__black"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductManager;
