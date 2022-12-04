import { useDispatch, useSelector } from "react-redux";
import { Image } from "cloudinary-react";
import { useEffect, useRef, useState } from "react";

import PopUp from "../../../Components/PopUp";
import Breadcrumb from "../../../Components/Breadcrumb";
import "./MerchShop.scss";

import { previewImage, previewImages } from "../../../utils/previewImage";
import {
    createMerch,
    deleteMerch,
    updateMerch,
} from "../../../redux/slice/merch";
import { ShowImage, ShowImages } from "../Components/ShowImage";

import recycleBin from "../../../Assets/svg/recycleBin.svg";
import editPen from "../../../Assets/svg/editPen.svg";
const MerchShop = () => {
    const selector = useSelector((state) => state.merch);
    const dispatch = useDispatch();

    const productRef = useRef(null);

    const [merchName, setMerchName] = useState("");
    const [merchPrice, setMerchPrice] = useState(0);
    const [newBadge, setNewBadge] = useState(true);
    const [merchImages, setMerchImages] = useState([]);
    const [imageDisplay, setImageDisplay] = useState();
    const [size, setSize] = useState(["S"]);
    const [brand, setBrand] = useState("Okbutfirst");
    const [availability, setAvailability] = useState("Many In Stock");
    const [merchDesc, setMerchDesc] = useState("");
    const [features, setFeatures] = useState("");
    const [color, setColor] = useState([]);
    const [merchId, setMerchId] = useState();
    const [busy, setBusy] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [update, setUpdate] = useState(false);
    const [remove, setRemove] = useState(false);
    const [notification, setNotification] = useState(false);
    const [fetchMerch, setFetchMerch] = useState();
    const [flag, setFlag] = useState(true);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        if (name === "merchName") setMerchName(value);
        if (name === "merchPrice") setMerchPrice(value);
        if (name === "newBadge") setNewBadge(value);
        if (name === "availability") setAvailability(value);
        if (name === "brand") setBrand(value);
        if (name === "merchDesc") setMerchDesc(value);
        if (name === "features") setFeatures(value);
    };

    const handleOnChangeSize = (e) => {
        let { checked, value } = e.target;
        if (checked) {
            setSize([...size, value]);
        } else {
            setSize(size.filter((e) => e !== value));
        }
    };

    const handleOnChangeColor = (e) => {
        let { checked, value } = e.target;
        if (checked) {
            setColor([...color, value]);
        } else {
            setColor(color.filter((e) => e !== value));
        }
    };

    const handleOnClickCreateMerch = () => {
        setFlag(true);
        setMerchName("");
        setMerchPrice(0);
        setNewBadge(true);
        setSize(["S"]);
        setAvailability("Many In Stock");
        setColor([]);
        setBrand("Okbutfirst");
        setImageDisplay();
        setMerchImages([]);
        setMerchDesc("");
        setFeatures("");
        productRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleOnClickUpdateMerch = (merch) => {
        setFlag(false);
        setMerchId(merch._id);
        setMerchName(merch.name);
        setMerchPrice(merch.price.toFixed(2));
        setNewBadge(merch.newBadge);
        setSize(merch.size);
        setAvailability(merch.availability);
        setColor(merch.color);
        setBrand(merch.brand);
        setImageDisplay(merch.imageDisplay);
        setMerchImages(merch.merchImages);
        setMerchDesc(merch.description);
        setFeatures(merch.features);

        productRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleOnClickDeleteMerch = (e) => {
        dispatch(deleteMerch(e))
            .then((res) => {
                setRemove(true);
                setBusy(false);
                setFlag(true);
                setMerchName("");
                setMerchPrice(0);
                setNewBadge(true);
                setSize(["S"]);
                setAvailability("Many In Stock");
                setColor([]);
                setBrand("Okbutfirst");
                setImageDisplay();
                setMerchImages([]);
                setMerchDesc("");
                setFeatures("");
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            })
            .finally(setBusy(true));
    };

    const handleSubmitCreateMerch = (e) => {
        e.preventDefault();

        if (
            availability.trim() === "" ||
            merchName.trim() === "" ||
            merchDesc.trim() === "" ||
            features.trim() === "" ||
            brand.trim() === "" ||
            size.length === 0 ||
            merchImages.length === 0 ||
            color.length === 0 ||
            !imageDisplay
        ) {
            setNotification(true);
        } else uploadData(createMerch);
    };

    const handleSubmitUpdateMerch = (e) => {
        e.preventDefault();

        if (
            availability.trim() === "" ||
            merchName.trim() === "" ||
            merchDesc.trim() === "" ||
            features.trim() === "" ||
            brand.trim() === "" ||
            size.length === 0 ||
            merchImages.length === 0 ||
            color.length === 0 ||
            !imageDisplay
        ) {
            setNotification(true);
        } else uploadData(updateMerch, true);
    };

    const uploadData = (actionProduct, update = false) => {
        const data = {
            merchId,
            merchName,
            merchPrice,
            newBadge,
            size,
            availability,
            color,
            brand,
            imageDisplay,
            merchImages,
            merchDesc,
            features,
        };
        dispatch(actionProduct(data))
            .then((res) => {
                setBusy(false);
                if (res.payload) {
                    if (update) setUpdate(true);
                    else setSuccess(true);
                    setMerchName("");
                    setMerchPrice(0);
                    setNewBadge(true);
                    setSize(["S"]);
                    setAvailability("Many In Stock");
                    setColor([]);
                    setBrand("Okbutfirst");
                    setImageDisplay();
                    setMerchImages([]);
                    setMerchDesc("");
                    setFeatures("");
                } else setError(true);
            })
            .catch((err) => setError(true))
            .finally(setBusy(true));
    };

    useEffect(() => {
        setFetchMerch(selector);
    }, [selector]);

    const listProduct = fetchMerch?.map((merch, index) => {
        return (
            <tr key={merch._id}>
                <td>{index + 1}</td>
                <td>{merch.name}</td>
                <td>{merch.price.toFixed(2)}</td>
                <td>
                    <Image
                        cloudName="ok-but-first-coffee"
                        publicId={merch.imageDisplay}
                        width="25"
                        crop="scale"
                    />
                </td>
                <td>
                    <div className="table-desc">{merch.description}</div>
                </td>
                <td className="actions">
                    <button
                        onClick={(e) => handleOnClickUpdateMerch(merch)}
                        className="theme-btn__black"
                    >
                        <img src={editPen} alt="edit-pen" />
                    </button>
                    <button
                        onClick={(e) => handleOnClickDeleteMerch(merch)}
                        className="theme-btn__black"
                    >
                        <img src={recycleBin} alt="recycle-bin" />
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <>
            <main className="merch-manager">
                <section>
                    <Breadcrumb
                        breadcrumb="Merch Shop"
                        list={[{ title: "Admin", path: "/admin" }]}
                    />
                </section>
                <section>
                    <div className="container">
                        <div className="product-manager-wrapper">
                            <div className="list-products">
                                <h3 className="product-title">List Of Merch</h3>
                                <div className="product-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Name Merch</th>
                                                <th>Price</th>
                                                <th>Image</th>
                                                <th>Description</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {fetchMerch && listProduct}
                                            <tr>
                                                <td>
                                                    <button
                                                        onClick={
                                                            handleOnClickCreateMerch
                                                        }
                                                        className="theme-btn__black"
                                                    >
                                                        +
                                                    </button>
                                                </td>
                                                <td>...</td>
                                                <td>...</td>
                                                <td>...</td>
                                                <td>...</td>
                                                <td>...</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div
                                className={
                                    flag ? "create-product" : "update-product"
                                }
                                ref={productRef}
                            >
                                <h3 className="product-title">
                                    {flag
                                        ? "Create New Product"
                                        : "Update Product"}
                                </h3>
                                <form
                                    onSubmit={
                                        flag
                                            ? handleSubmitCreateMerch
                                            : handleSubmitUpdateMerch
                                    }
                                    className="product-form"
                                    acceptCharset="UTF-8"
                                >
                                    <input
                                        type="hidden"
                                        name="utf8"
                                        value={"✓"}
                                    />
                                    <label>
                                        <span>Enter Name: </span>
                                        <input
                                            type="text"
                                            name="merchName"
                                            onChange={handleOnChange}
                                            value={merchName}
                                            autoComplete="off"
                                        />
                                    </label>
                                    <label>
                                        <span>Enter Price: </span>
                                        <input
                                            type="number"
                                            name="merchPrice"
                                            onChange={handleOnChange}
                                            step={0.01}
                                            min={0}
                                            value={merchPrice}
                                        />
                                    </label>
                                    <div className="input-radio">
                                        <div className="form-group">
                                            <h4>New Badge</h4>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="newBadge"
                                                    checked={
                                                        newBadge === "true" ||
                                                        newBadge === true
                                                            ? true
                                                            : false
                                                    }
                                                    value={true}
                                                    onChange={handleOnChange}
                                                />
                                                <span>Yes</span>
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="newBadge"
                                                    value={false}
                                                    checked={
                                                        newBadge === "false" ||
                                                        newBadge === false
                                                            ? true
                                                            : false
                                                    }
                                                    onChange={handleOnChange}
                                                />
                                                <span>No</span>
                                            </label>
                                        </div>

                                        <div className="form-group">
                                            <h4>Size</h4>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={"S"}
                                                    onChange={
                                                        handleOnChangeSize
                                                    }
                                                    checked={size.includes("S")}
                                                />
                                                <span>S</span>
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={"M"}
                                                    onChange={
                                                        handleOnChangeSize
                                                    }
                                                    checked={size.includes("M")}
                                                />
                                                <span>M</span>
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={"L"}
                                                    onChange={
                                                        handleOnChangeSize
                                                    }
                                                    checked={size.includes("L")}
                                                />
                                                <span>L</span>
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={"XL"}
                                                    onChange={
                                                        handleOnChangeSize
                                                    }
                                                    checked={size.includes(
                                                        "XL"
                                                    )}
                                                />
                                                <span>XL</span>
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={"ADJUSTABLE"}
                                                    onChange={
                                                        handleOnChangeSize
                                                    }
                                                    checked={size.includes(
                                                        "ADJUSTABLE"
                                                    )}
                                                />
                                                <span>ADJUSTABLE</span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <h4>Availability</h4>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="availability"
                                                    onChange={handleOnChange}
                                                    value={"Many In Stock"}
                                                    checked={
                                                        availability ===
                                                        "Many In Stock"
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                <span> Many In Stock</span>
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="availability"
                                                    value={"Little In Stock"}
                                                    onChange={handleOnChange}
                                                    checked={
                                                        availability ===
                                                        "Little In Stock"
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                <span> Little In Stock</span>
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="availability"
                                                    value={"Out Of Stock"}
                                                    onChange={handleOnChange}
                                                    checked={
                                                        availability ===
                                                        "Out Of Stock"
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                <span> Out Of Stock</span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <h4>Color</h4>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={"Gray"}
                                                    checked={color.includes(
                                                        "Gray"
                                                    )}
                                                    onChange={
                                                        handleOnChangeColor
                                                    }
                                                />
                                                <span>Gray</span>
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={"Black"}
                                                    checked={color.includes(
                                                        "Black"
                                                    )}
                                                    onChange={
                                                        handleOnChangeColor
                                                    }
                                                />
                                                <span>Black</span>
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={"Blue"}
                                                    checked={color.includes(
                                                        "Blue"
                                                    )}
                                                    onChange={
                                                        handleOnChangeColor
                                                    }
                                                />
                                                <span>Blue</span>
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={"Black Trucker"}
                                                    checked={color.includes(
                                                        "Black Trucker"
                                                    )}
                                                    onChange={
                                                        handleOnChangeColor
                                                    }
                                                />
                                                <span>Black Trucker</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="image">
                                        <label>
                                            <span>Brand</span>
                                            <input
                                                type="text"
                                                name="brand"
                                                onChange={handleOnChange}
                                                value={brand}
                                            />
                                        </label>
                                        <label>
                                            <input
                                                type="file"
                                                onChange={(e) =>
                                                    previewImage(
                                                        e,
                                                        setImageDisplay
                                                    )
                                                }
                                                name="productDisplayImage"
                                                style={{ display: "none" }}
                                                accept="image/*"
                                            />
                                            <span>
                                                Choose Product Display Image
                                            </span>
                                            <div className="show-img">
                                                <ShowImage
                                                    data={imageDisplay}
                                                    setData={setImageDisplay}
                                                />
                                            </div>
                                        </label>
                                        <label>
                                            <input
                                                type="file"
                                                multiple
                                                onChange={(e) =>
                                                    previewImages(
                                                        e,
                                                        setMerchImages
                                                    )
                                                }
                                                name="productImage"
                                                style={{ display: "none" }}
                                                accept="image/*"
                                            />
                                            <span>Choose product images </span>
                                            <ShowImages
                                                data={merchImages}
                                                setData={setMerchImages}
                                            />
                                        </label>
                                    </div>

                                    <label>
                                        <span>Enter Product Description: </span>
                                        <textarea
                                            rows="10"
                                            onChange={handleOnChange}
                                            name="merchDesc"
                                            value={merchDesc}
                                        ></textarea>
                                    </label>

                                    <label>
                                        <span>Enter Merch Feature:</span>
                                        <textarea
                                            rows="10"
                                            onChange={handleOnChange}
                                            name="features"
                                            value={features}
                                        ></textarea>
                                    </label>
                                    <button
                                        type="submit"
                                        className="theme-btn__black"
                                    >
                                        {flag ? "Create" : "Update"}
                                    </button>
                                </form>
                            </div>

                            {success && (
                                <PopUp
                                    message={"Create Product Success! ^.^"}
                                    setPopUp={setSuccess}
                                />
                            )}
                            {update && (
                                <PopUp
                                    message={"Update Product Success! ^.^"}
                                    setPopUp={setUpdate}
                                />
                            )}
                            {remove && (
                                <PopUp
                                    message={"Delete Product Success! ^.^"}
                                    setPopUp={setRemove}
                                />
                            )}
                            {notification && (
                                <PopUp
                                    message={"Enter full data, please!"}
                                    setPopUp={setNotification}
                                />
                            )}
                            {error && (
                                <PopUp
                                    message={
                                        "Error! Please notify the developer :< "
                                    }
                                    setPopUp={setError}
                                />
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default MerchShop;
