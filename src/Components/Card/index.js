import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

import iconCart from "../../Assets/svg/iconCart.svg";
import iconHeart from "../../Assets/svg/iconHeart.svg";
import "./Card.scss";

const Card = ({
    title,
    img,
    isNew = false,
    desc,
    price,
    idProduct,
    path = "/",
}) => {
    return (
        <>
            <div className="card" data-id={idProduct}>
                <div className="card-img">
                    {isNew ? (
                        <div className="card-badges">
                            <span>New</span>
                        </div>
                    ) : (
                        <></>
                    )}

                    <Link to={path}>
                        <Image
                            cloudName="ok-but-first-coffee"
                            publicId={img}
                            crop="scale"
                            className="product-img"
                        />
                    </Link>

                    <div className="card-wishlist">
                        <button>
                            <img src={iconHeart} alt="icon-heart" />
                        </button>
                    </div>
                </div>
                <div className="card-content">
                    <h4 className="card-title">
                        <Link to={path}>{title}</Link>
                    </h4>
                    <div className="card-desc">
                        <p>{desc}</p>
                    </div>
                    <div className="card-price">
                        <span>${price}</span>
                        <div className="add-to-cart">
                            <button>
                                <img src={iconCart} alt="icon-cart" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
