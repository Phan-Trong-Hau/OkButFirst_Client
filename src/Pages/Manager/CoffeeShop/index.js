import { useEffect, useState } from "react";
import { Image } from "cloudinary-react";
import { useSelector } from "react-redux";

import Breadcrumb from "../../../Components/Breadcrumb";
import LoadingSpinner from "../../../Components/Loading";
import PopUp from "../../../Components/PopUp";
import api from "../../../utils/apiCaller";
import { previewImage, previewImages } from "../../../utils/previewImage";
import { ShowImage, ShowImages } from "../Components/ShowImage";
import "./CoffeeShop.scss";

const ProductManager = () => {
    const selector = useSelector((state) => state.products);

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
    const [disc1, setDisc1] = useState("");
    const [disc2, setDisc2] = useState("");
    const [busy, setBusy] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [notification, setNotification] = useState(false);
    const [fetchProducts, setFetchProducts] = useState();

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

    const handleSubmitProduct = (e) => {
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
            !imageDisplay
        ) {
            setNotification(true);
            return;
        }
        uploadData();
    };

    const uploadData = async () => {
        setBusy(true);
        try {
            const res = await api.post("/v1/products", {
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
                },
            });
            if (res.data?.message === "Create product success!") {
                setSuccess(true);

                setProductName("");
                setProductPrice(0);
                setNewBadge(true);
                setBagSize(["12"]);
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
            } else setError(true);
        } catch (error) {
            setError(true);
        }
        setBusy(false);
    };

    useEffect(() => {
        setFetchProducts(selector);
        console.log(selector);
    }, [selector]);

    const data = fetchProducts?.map((product, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.bagSize} OZ</td>
                <td>
                    <Image
                        cloudName="ok-but-first-coffee"
                        publicId={product.imageDisplay}
                        width="25"
                        crop="scale"
                    />
                </td>
                <td></td>
            </tr>
        );
    });

    return (
        <>
            <div className="product-manager">
                <Breadcrumb
                    breadcrumb="Coffee Shop"
                    list={[{ title: "Admin", path: "/admin" }]}
                />
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
                                                <th>Description</th>
                                                <th>Image</th>
                                                <th>New</th>
                                            </tr>
                                        </thead>
                                        <tbody>{fetchProducts && data}</tbody>
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
                                                    defaultChecked
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
                                                    onChange={handleOnChange}
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
                                        <span>Enter Product Description: </span>
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
                                                        setProductImages
                                                    )
                                                }
                                                name="productImage"
                                                style={{ display: "none" }}
                                                accept="image/*"
                                            />
                                            <span>Choose product images </span>
                                            <ShowImages
                                                data={productImages}
                                                setData={setProductImages}
                                            />
                                        </label>
                                        <label>
                                            <span>Choose Background Image</span>
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
                                            <span>Choose Profile Image</span>
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
                                                    previewImage(e, setImgRoast)
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
                                                    previewImage(e, setImgBag)
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
                                                    previewImage(e, setImgSub)
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
                                            <span>Choose Background Color</span>
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

                                    <button
                                        type="submit"
                                        className="theme-btn__black"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>

                            {success && (
                                <PopUp
                                    message={"Create Product Success! ^.^"}
                                    setPopUp={setSuccess}
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
            </div>
        </>
    );
};

export default ProductManager;
