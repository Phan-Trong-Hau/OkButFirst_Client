import { useEffect, useRef, useState } from "react";
import { Image } from "cloudinary-react";
import { useDispatch, useSelector } from "react-redux";

import {
    createProduct,
    deleteProduct,
    updateProduct,
} from "../../../redux/slice/products";
import { previewImage, previewImages } from "../../../utils/previewImage";
import { ShowImage, ShowImages } from "../Components/ShowImage";

import Breadcrumb from "../../../Components/Breadcrumb";
import LoadingSpinner from "../../../Components/Loading";
import PopUp from "../../../Components/PopUp";

import "./CoffeeShop.scss";

import recycleBin from "../../../Assets/svg/recycleBin.svg";
import editPen from "../../../Assets/svg/editPen.svg";

const ProductManager = () => {
    const selector = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const productRef = useRef(null);

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [newBadge, setNewBadge] = useState(true);
    const [bagSize, setBagSize] = useState([12]);
    const [grind, setGrind] = useState(["whole bean"]);
    const [imageDisplay, setImageDisplay] = useState();
    const [productDesc, setProductDesc] = useState("");
    const [productImages, setProductImages] = useState([]);
    const [titleProfile, setTitleProfile] = useState("");
    const [imgProfile, setImgProfile] = useState();
    const [titleOrigin, setTitleOrigin] = useState("");
    const [imgOrigin, setImgOrigin] = useState();
    const [titleRoast, setTitleRoast] = useState("");
    const [imgRoast, setImgRoast] = useState();
    const [imgBackground, setImgBackground] = useState();
    const [imgBag, setImgBag] = useState();
    const [imgSub, setImgSub] = useState();
    const [colorBackground, setColorBackground] = useState("#000000");
    const [colorSub, setColorSub] = useState("#000000");
    const [colorBorder, setColorBorder] = useState("#000000");
    const [colorBorderRoast, setColorBorderRoast] = useState("#000000");
    const [colorBgRoast, setColorBgRoast] = useState("#000000");
    const [imgMiddleRoast, setImgMiddleRoast] = useState();
    const [disc1, setDisc1] = useState("");
    const [disc2, setDisc2] = useState("");
    const [productId, setProductId] = useState();
    const [busy, setBusy] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [update, setUpdate] = useState(false);
    const [remove, setRemove] = useState(false);
    const [notification, setNotification] = useState(false);
    const [fetchProducts, setFetchProducts] = useState();
    const [flag, setFlag] = useState(true);

    const handleOnClickCreateProduct = () => {
        setFlag(true);
        setProductName("");
        setProductPrice(0);
        setNewBadge(true);
        setBagSize([12]);
        setGrind(["whole bean"]);
        setImageDisplay();
        setProductDesc("");
        setProductImages([]);
        setTitleProfile("");
        setImgProfile();
        setTitleOrigin("");
        setImgOrigin();
        setTitleRoast("");
        setImgRoast();
        setImgBackground();
        setImgBag();
        setImgSub();
        setColorBackground("#000000");
        setColorSub("#000000");
        setColorBorder("#000000");
        setDisc1("");
        setDisc2("");
        setColorBorderRoast("#000000");
        setColorBgRoast("#000000");
        setImgMiddleRoast();
        productRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const handleOnClickUpdateProduct = (product) => {
        setFlag(false);
        setProductId(product._id);
        setProductName(product.name);
        setProductPrice(product.price.toFixed(2));
        setProductDesc(product.description);
        setDisc1(product.discription[0]);
        setDisc2(product.discription[1]);
        setBagSize(product.bagSize);
        setGrind(product.grind);
        setNewBadge(product.newBadge);
        setTitleProfile(product.making[0].title);
        setTitleOrigin(product.making[1].title);
        setTitleRoast(product.making[2].title);
        setColorBackground(product.color.colorBackground || "#000000");
        setColorSub(product.color.colorSub || "#000000");
        setColorBorder(product.color.colorBorder || "#000000");
        setImageDisplay(product.imageDisplay);
        setProductImages(product.productImages);
        setImgBackground(product.imageBackground);
        setImgBag(product.imageExtra.imgBag);
        setImgSub(product.imageExtra.imgSub);
        setImgProfile(product.making[0].img);
        setImgOrigin(product.making[1].img);
        setImgRoast(product.making[2].img);
        setImgMiddleRoast(product.imageMiddleRoast);
        setColorBorderRoast(product.color.colorBorderRoast || "#000000");
        setColorBgRoast(product.color.colorBgRoast || "#000000");
        productRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const handleOnClickDeleteProduct = (e) => {
        dispatch(deleteProduct(e))
            .then((res) => {
                setRemove(true);
                setBusy(false);
                setFlag(true);
                setProductName("");
                setProductPrice(0);
                setNewBadge(true);
                setBagSize([12]);
                setGrind(["whole bean"]);
                setImageDisplay();
                setProductDesc("");
                setProductImages([]);
                setTitleProfile("");
                setImgProfile();
                setTitleOrigin("");
                setImgOrigin();
                setTitleRoast("");
                setImgRoast();
                setImgBackground();
                setImgBag();
                setImgSub();
                setColorBackground("#000000");
                setColorSub("#000000");
                setColorBorder("#000000");
                setColorBgRoast("#000000");
                setColorBorderRoast("#000000");
                setImgMiddleRoast();
                setDisc1("");
                setDisc2("");
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            })
            .finally(setBusy(true));
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        if (name === "productName") setProductName(value);
        if (name === "productPrice") setProductPrice(value);
        if (name === "productDesc") setProductDesc(value);
        if (name === "productDisc1") setDisc1(value);
        if (name === "productDisc2") setDisc2(value);
        if (name === "newBadge") setNewBadge(value);
        if (name === "titleProfile") setTitleProfile(value);
        if (name === "titleOrigin") setTitleOrigin(value);
        if (name === "titleRoast") setTitleRoast(value);
        if (name === "colorBackground") setColorBackground(value);
        if (name === "colorSubscription") setColorSub(value);
        if (name === "colorBorder") setColorBorder(value);
        if (name === "colorBorderRoast") setColorBorderRoast(value);
        if (name === "colorBackgroundRoast") setColorBgRoast(value);
    };

    const handleOnChangeBagSize = (e) => {
        let { checked, value } = e.target;
        value = parseInt(value);
        if (checked) {
            setBagSize([...bagSize, value]);
        } else {
            setBagSize(bagSize.filter((e) => e !== value));
        }
    };

    const handleOnChangeGrind = (e) => {
        const { checked, value } = e.target;
        if (checked) {
            setGrind([...grind, value]);
        } else setGrind(grind.filter((e) => e !== value));
    };

    const handleSubmitCreateProduct = (e) => {
        e.preventDefault();

        if (
            productName.trim() === "" ||
            productDesc.trim() === "" ||
            titleProfile.trim() === "" ||
            titleOrigin.trim() === "" ||
            titleRoast.trim() === "" ||
            disc1.trim() === "" ||
            disc2.trim() === "" ||
            bagSize.length === 0 ||
            grind.length === 0 ||
            productImages.length === 0 ||
            !imgSub ||
            !imgBag ||
            !imgBackground ||
            !imgRoast ||
            !imgOrigin ||
            !imgProfile ||
            !imageDisplay ||
            !imgMiddleRoast
        ) {
            setNotification(true);
        } else uploadData(createProduct);
    };

    const handleSubmitUpdateProduct = (e) => {
        e.preventDefault();

        if (
            productName.trim() === "" ||
            productDesc.trim() === "" ||
            titleProfile.trim() === "" ||
            titleOrigin.trim() === "" ||
            titleRoast.trim() === "" ||
            disc1.trim() === "" ||
            disc2.trim() === "" ||
            bagSize.length === 0 ||
            grind.length === 0 ||
            productImages.length === 0 ||
            !imgSub ||
            !imgBag ||
            !imgBackground ||
            !imgRoast ||
            !imgOrigin ||
            !imgProfile ||
            !imageDisplay ||
            !imgMiddleRoast
        ) {
            setNotification(true);
        } else uploadData(updateProduct, true);
    };

    const uploadData = (actionProduct, update = false) => {
        const data = {
            productId,
            productName,
            productPrice,
            productDesc,
            discription: [disc1, disc2],
            imageDisplay,
            imgBackground,
            productImages,
            newBadge,
            bagSize,
            grind,
            making: [
                {
                    title: titleProfile,
                    img: imgProfile,
                },
                {
                    title: titleOrigin,
                    img: imgOrigin,
                },
                {
                    title: titleRoast,
                    img: imgRoast,
                },
            ],
            imgExtra: {
                imgBag,
                imgSub,
            },
            color: {
                colorBackground,
                colorSub,
                colorBorder,
                colorBgRoast,
                colorBorderRoast,
            },
            imageMiddleRoast: imgMiddleRoast,
        };
        dispatch(actionProduct(data))
            .then((res) => {
                setBusy(false);
                if (res.payload) {
                    if (update) setUpdate(true);
                    else setSuccess(true);
                    setProductName("");
                    setProductPrice(0);
                    setNewBadge(true);
                    setBagSize([12]);
                    setGrind(["whole bean"]);
                    setImageDisplay();
                    setProductDesc("");
                    setProductImages([]);
                    setTitleProfile("");
                    setImgProfile();
                    setTitleOrigin("");
                    setImgOrigin();
                    setTitleRoast("");
                    setImgRoast();
                    setImgBackground();
                    setImgBag();
                    setImgSub();
                    setColorBackground("#000000");
                    setColorSub("#000000");
                    setColorBorder("#000000");
                    setColorBgRoast("#000000");
                    setColorBorderRoast("#000000");
                    setImgMiddleRoast();
                    setDisc1("");
                    setDisc2("");
                } else setError(true);
            })
            .catch((err) => setError(true))
            .finally(setBusy(true));
    };

    useEffect(() => {
        setFetchProducts(selector);
    }, [selector]);

    const listProduct = fetchProducts?.map((product, index) => {
        return (
            <tr key={product._id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price.toFixed(2)}</td>
                <td>
                    <Image
                        cloudName="ok-but-first-coffee"
                        publicId={product.imageDisplay}
                        width="25"
                        crop="scale"
                    />
                </td>
                <td>
                    <div className="table-desc">{product.description}</div>
                </td>
                <td className="actions">
                    <button
                        onClick={(e) => handleOnClickUpdateProduct(product)}
                        className="theme-btn__black"
                    >
                        <img src={editPen} alt="edit-pen" />
                    </button>
                    <button
                        onClick={(e) => handleOnClickDeleteProduct(product)}
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
            <main className="product-manager">
                <section>
                    <Breadcrumb
                        breadcrumb="Coffee Shop"
                        list={[{ title: "Admin", path: "/admin" }]}
                    />
                </section>
                <section>
                    {busy || !fetchProducts ? (
                        <LoadingSpinner />
                    ) : (
                        <div className="container">
                            <div className="product-manager-wrapper">
                                <div className="list-products">
                                    <h3 className="product-title">
                                        List Of Products
                                    </h3>
                                    <div className="product-table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Name Product</th>
                                                    <th>Price</th>
                                                    <th>Image</th>
                                                    <th>Description</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {fetchProducts && listProduct}
                                                <tr>
                                                    <td>
                                                        <button
                                                            onClick={
                                                                handleOnClickCreateProduct
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
                                        flag
                                            ? "create-product"
                                            : "update-product"
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
                                                ? handleSubmitCreateProduct
                                                : handleSubmitUpdateProduct
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
                                            <span>Enter Name Product: </span>
                                            <input
                                                type="text"
                                                name="productName"
                                                onChange={handleOnChange}
                                                value={productName}
                                                autoComplete="off"
                                            />
                                        </label>
                                        <label>
                                            <span>Enter Price Product: </span>
                                            <input
                                                type="number"
                                                name="productPrice"
                                                onChange={handleOnChange}
                                                step={0.01}
                                                min={0}
                                                value={productPrice}
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
                                                            newBadge ===
                                                                "true" ||
                                                            newBadge === true
                                                                ? true
                                                                : false
                                                        }
                                                        value={true}
                                                        onChange={
                                                            handleOnChange
                                                        }
                                                    />
                                                    <span>Yes</span>
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="newBadge"
                                                        value={false}
                                                        onChange={
                                                            handleOnChange
                                                        }
                                                        checked={
                                                            newBadge ===
                                                                "false" ||
                                                            newBadge === false
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    <span>No</span>
                                                </label>
                                            </div>

                                            <div className="form-group">
                                                <h4>Bag Size</h4>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        value={12}
                                                        onChange={
                                                            handleOnChangeBagSize
                                                        }
                                                        checked={bagSize.includes(
                                                            12
                                                        )}
                                                    />
                                                    <span>12 OZ</span>
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        value={24}
                                                        onChange={
                                                            handleOnChangeBagSize
                                                        }
                                                        checked={bagSize.includes(
                                                            24
                                                        )}
                                                    />
                                                    <span>24 OZ</span>
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        value={36}
                                                        onChange={
                                                            handleOnChangeBagSize
                                                        }
                                                        checked={bagSize.includes(
                                                            36
                                                        )}
                                                    />
                                                    <span>36 OZ</span>
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        value={48}
                                                        onChange={
                                                            handleOnChangeBagSize
                                                        }
                                                        checked={bagSize.includes(
                                                            48
                                                        )}
                                                    />
                                                    <span>48 OZ</span>
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        value={60}
                                                        onChange={
                                                            handleOnChangeBagSize
                                                        }
                                                        checked={bagSize.includes(
                                                            60
                                                        )}
                                                    />
                                                    <span>60 OZ</span>
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        value={72}
                                                        onChange={
                                                            handleOnChangeBagSize
                                                        }
                                                        checked={bagSize.includes(
                                                            72
                                                        )}
                                                    />
                                                    <span>72 OZ</span>
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        value={84}
                                                        onChange={
                                                            handleOnChangeBagSize
                                                        }
                                                        checked={bagSize.includes(
                                                            84
                                                        )}
                                                    />
                                                    <span>84 OZ</span>
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        value={96}
                                                        onChange={
                                                            handleOnChangeBagSize
                                                        }
                                                        checked={bagSize.includes(
                                                            96
                                                        )}
                                                    />
                                                    <span>96 OZ</span>
                                                </label>
                                            </div>
                                            <div className="form-group">
                                                <h4>Grind</h4>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        value="whole bean"
                                                        onChange={
                                                            handleOnChangeGrind
                                                        }
                                                        checked={grind.includes(
                                                            "whole bean"
                                                        )}
                                                    />
                                                    <span>Whole Bean</span>
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        value="ground"
                                                        onChange={
                                                            handleOnChangeGrind
                                                        }
                                                        checked={grind.includes(
                                                            "ground"
                                                        )}
                                                    />
                                                    <span>Ground</span>
                                                </label>
                                            </div>
                                        </div>

                                        <label>
                                            <span>
                                                Enter Product Description:{" "}
                                            </span>
                                            <textarea
                                                rows="10"
                                                onChange={handleOnChange}
                                                name="productDesc"
                                                value={productDesc}
                                            ></textarea>
                                        </label>
                                        <div className="image">
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
                                                        setData={
                                                            setImageDisplay
                                                        }
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
                                                            setProductImages
                                                        )
                                                    }
                                                    name="productImage"
                                                    style={{ display: "none" }}
                                                    accept="image/*"
                                                />
                                                <span>
                                                    Choose product images{" "}
                                                </span>
                                                <ShowImages
                                                    data={productImages}
                                                    setData={setProductImages}
                                                />
                                            </label>
                                            <label>
                                                <span>
                                                    Choose Background Image
                                                </span>
                                                <input
                                                    type="file"
                                                    style={{ display: "none" }}
                                                    accept="image/*"
                                                    onChange={(e) =>
                                                        previewImage(
                                                            e,
                                                            setImgBackground
                                                        )
                                                    }
                                                />
                                                <ShowImage
                                                    data={imgBackground}
                                                    setData={setImgBackground}
                                                />
                                            </label>
                                        </div>
                                        <div className="making">
                                            <label>
                                                <span>Title Profile</span>
                                                <input
                                                    type="text"
                                                    name="titleProfile"
                                                    value={titleProfile}
                                                    onChange={handleOnChange}
                                                    autoComplete="off"
                                                />
                                            </label>
                                            <label>
                                                <span>
                                                    Choose Profile Image
                                                </span>
                                                <input
                                                    type="file"
                                                    style={{ display: "none" }}
                                                    accept="image/*"
                                                    onChange={(e) =>
                                                        previewImage(
                                                            e,
                                                            setImgProfile
                                                        )
                                                    }
                                                />
                                                <ShowImage
                                                    data={imgProfile}
                                                    setData={setImgProfile}
                                                />
                                            </label>
                                            <label>
                                                <span>Title Origin</span>
                                                <input
                                                    type="text"
                                                    name="titleOrigin"
                                                    value={titleOrigin}
                                                    onChange={handleOnChange}
                                                    autoComplete="off"
                                                />
                                            </label>
                                            <label>
                                                <span>Choose Origin Image</span>
                                                <input
                                                    type="file"
                                                    style={{ display: "none" }}
                                                    accept="image/*"
                                                    onChange={(e) =>
                                                        previewImage(
                                                            e,
                                                            setImgOrigin
                                                        )
                                                    }
                                                />
                                                <ShowImage
                                                    data={imgOrigin}
                                                    setData={setImgOrigin}
                                                />
                                            </label>
                                            <label>
                                                <span>Title Roast</span>
                                                <input
                                                    type="text"
                                                    name="titleRoast"
                                                    value={titleRoast}
                                                    onChange={handleOnChange}
                                                    autoComplete="off"
                                                />
                                            </label>

                                            <label>
                                                <span>Choose Roast Image</span>
                                                <input
                                                    type="file"
                                                    style={{ display: "none" }}
                                                    accept="image/*"
                                                    onChange={(e) =>
                                                        previewImage(
                                                            e,
                                                            setImgRoast
                                                        )
                                                    }
                                                />
                                                <ShowImage
                                                    data={imgRoast}
                                                    setData={setImgRoast}
                                                />
                                            </label>
                                        </div>

                                        <div className="image-extra">
                                            <label>
                                                <span>Choose Bag Image</span>
                                                <input
                                                    type="file"
                                                    style={{ display: "none" }}
                                                    accept="image/*"
                                                    onChange={(e) =>
                                                        previewImage(
                                                            e,
                                                            setImgBag
                                                        )
                                                    }
                                                />
                                                <ShowImage
                                                    data={imgBag}
                                                    setData={setImgBag}
                                                />
                                            </label>
                                            <label>
                                                <span>
                                                    Choose Subscription Image
                                                </span>
                                                <input
                                                    type="file"
                                                    style={{ display: "none" }}
                                                    accept="image/*"
                                                    onChange={(e) =>
                                                        previewImage(
                                                            e,
                                                            setImgSub
                                                        )
                                                    }
                                                />
                                                <ShowImage
                                                    data={imgSub}
                                                    setData={setImgSub}
                                                />
                                            </label>
                                        </div>
                                        <div className="color">
                                            <label>
                                                <span>
                                                    Choose Background Color
                                                </span>
                                                <input
                                                    type="color"
                                                    name="colorBackground"
                                                    onChange={handleOnChange}
                                                    value={colorBackground}
                                                />
                                            </label>
                                            <label>
                                                <span>
                                                    Choose Subscription Color
                                                </span>
                                                <input
                                                    type="color"
                                                    onChange={handleOnChange}
                                                    name="colorSubscription"
                                                    value={colorSub}
                                                />
                                            </label>
                                            <label>
                                                <span>Choose Border Color</span>
                                                <input
                                                    type="color"
                                                    onChange={handleOnChange}
                                                    name="colorBorder"
                                                    value={colorBorder}
                                                />
                                            </label>
                                        </div>

                                        <label>
                                            <span>
                                                Enter Product Discription 1:{" "}
                                            </span>
                                            <textarea
                                                rows="10"
                                                onChange={handleOnChange}
                                                name="productDisc1"
                                                value={disc1}
                                            ></textarea>
                                        </label>
                                        <label>
                                            <span>
                                                Enter Product Discription 2:{" "}
                                            </span>
                                            <textarea
                                                rows="10"
                                                onChange={handleOnChange}
                                                name="productDisc2"
                                                value={disc2}
                                            ></textarea>
                                        </label>
                                        <label>
                                            <input
                                                type="file"
                                                onChange={(e) =>
                                                    previewImage(
                                                        e,
                                                        setImgMiddleRoast
                                                    )
                                                }
                                                name="ImageMiddleRoast"
                                                style={{ display: "none" }}
                                                accept="image/*"
                                            />
                                            <span>
                                                Choose Image Middle Roast
                                            </span>
                                            <div className="show-img">
                                                <ShowImage
                                                    data={imgMiddleRoast}
                                                    setData={setImgMiddleRoast}
                                                />
                                            </div>
                                        </label>
                                        <div className="roast">
                                            <label>
                                                <span>
                                                    Choose Color Border Roast
                                                </span>
                                                <input
                                                    type="color"
                                                    name="colorBorderRoast"
                                                    onChange={handleOnChange}
                                                    value={colorBorderRoast}
                                                />
                                            </label>
                                            <label>
                                                <span>
                                                    Choose Color Background
                                                    Roast
                                                </span>
                                                <input
                                                    type="color"
                                                    name="colorBackgroundRoast"
                                                    onChange={handleOnChange}
                                                    value={colorBgRoast}
                                                />
                                            </label>
                                        </div>

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
                    )}
                </section>
            </main>
        </>
    );
};

export default ProductManager;
