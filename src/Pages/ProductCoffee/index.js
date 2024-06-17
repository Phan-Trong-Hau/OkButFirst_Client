import { useEffect, useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb";
import { Link, useParams } from "react-router-dom";
import { ProductApi } from "../../Api/product";
import { Image } from "cloudinary-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ProductCoffee.scss";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [imageSingle, setImageSingle] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [bagSize, setBagSize] = useState(0);
  const [grind, setGrind] = useState("");

  const handleChangeImageSingle = (image) => {
    setImageSingle(image);
  };

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productId = params.id;
        const result = await ProductApi.getProduct(productId);
        setProduct(result.product);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [params]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setImageSingle(product.productImages?.[0]);
    setBagSize(product.bagSize?.[0]);
    setGrind(product.grind?.[0]);

    document.title = `Buy Freshly Roasted Coffee Beans Online | ${product.name} | OKBF`;
  }, [product]);

  console.log({ product });

  const handleChangeQuantity = (e) => {
    if (e.target.innerText === "+") {
      setQuantity(quantity + 1);
    } else if (e.target.innerText === "-") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    } else {
      const value = Number(e.target.value);
      if (value < 1) setQuantity(1);
      else setQuantity(value);
    }
  };

  const handleChangeGrind = (item) => {
    setGrind(item);
  };

  const handleChangeBagSize = (item) => {
    setBagSize(item);
  };

  const ShowImage = () => {
    return (
      <>
        <div
          className="product-image-single"
          style={{
            background: `url(
              https://res.cloudinary.com/ok-but-first-coffee/image/upload/c_scale/${product.imageBackground}
            ) no-repeat center center`,
          }}
        >
          <Image
            cloudName="ok-but-first-coffee"
            publicId={imageSingle}
            crop="scale"
            className="product-img"
          />
        </div>
        <Swiper
          className="product-image-list "
          modules={[Navigation]}
          slidesPerView={3}
          navigation={true}
        >
          {product.productImages?.map((image, index) => {
            return (
              <SwiperSlide
                className={`image-item ${image === imageSingle ? "active" : ""}`}
                key={index}
                onClick={() => handleChangeImageSingle(image)}
              >
                <Image
                  cloudName="ok-but-first-coffee"
                  publicId={image}
                  crop="scale"
                  className="product-img"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
  };

  return (
    <>
      <main className="product-coffee">
        <section
          style={{ background: `${product.color?.colorBackground}` }}
          className="product-detail"
        >
          <Breadcrumb
            breadcrumb={product.name}
            list={[{ title: "Coffee Shop", path: "/collections/coffee-shop" }]}
          />
          <div className="container">
            <div className="product-order">
              <div className="product-image">
                <ShowImage />
              </div>
              <div className="product-info">
                <h1 className="product-name">{product.name}</h1>
                <div className="product-price">${product.price}</div>
                <div className="product-note">
                  <Link to="/pages/policies">Shipping</Link> calculated at
                  checkout.
                </div>
                <div className="product-bag-size">
                  <h3 className="bag-size-title">
                    BAG SIZE * <span>{bagSize} OZ</span>
                  </h3>

                  {product.bagSize?.map((item, index) => (
                    <div
                      className="bag-size-item"
                      key={index}
                      onClick={() => handleChangeBagSize(item)}
                    >
                      <Image
                        cloudName="ok-but-first-coffee"
                        publicId={product.imageExtra.imgBag}
                        crop="scale"
                        className="product-img"
                      />
                      <span>{item} OZ</span>
                    </div>
                  ))}
                </div>
                <div className="product-grind">
                  <h3 className="bag-size-title">
                    GRIND * <span>{grind}</span>
                  </h3>

                  {product.grind?.map((item, index) => (
                    <div
                      className="grind-item"
                      key={index}
                      onClick={() => handleChangeGrind(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div
                  className="product-subscription"
                  style={{
                    border: `1px solid ${product.color?.colorBorder}`,
                  }}
                >
                  <div className="subscription-head">
                    <div className="subscription-left">
                      <Image
                        cloudName="ok-but-first-coffee"
                        publicId={product.imageExtra?.imgSub}
                        crop="scale"
                        className="product-img"
                      />
                    </div>
                    <div className="subscription-right">
                      <h3 className="subscription-title">Subscription</h3>
                      <p className="subscription-content">
                        Products are automatically delivered on your schedule.
                        No obligation, modify or cancel your subscription
                        anytime.
                      </p>
                    </div>
                  </div>
                  <div className="subscription-body">
                    <h4>SUBSCRIBE AND SAVE UPTO 10% OFF</h4>

                    <Link
                      to="/products/coffee-club-subscription"
                      style={{
                        background: `${product.color?.colorSub}`,
                        border: `2px solid ${product.color?.colorSub}`,
                      }}
                    >
                      SUBSCRIBE
                    </Link>
                  </div>
                </div>
                <div className="product-quantity">
                  <h3 className="quantity-title">QUANTITY *</h3>
                  <div className="quantity-input">
                    <button onClick={handleChangeQuantity}>-</button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={handleChangeQuantity}
                      onClick={handleChangeQuantity}
                      min={1}
                      step={1}
                    />
                    <button onClick={handleChangeQuantity}>+</button>
                  </div>
                </div>
                <div className="product-subtotal">
                  <span>Subtotal ${(product.price * quantity).toFixed(2)}</span>
                </div>
                <button className="btn-add">Add to Cart</button>
              </div>
            </div>
          </div>
        </section>
        <section className="product-overview">
          <div className="container">
            <div className="product-making">
              {product.making?.map((item, index) => (
                <div key={index} className="making-item">
                  <div className="img-wrap">
                    <Image
                      cloudName="ok-but-first-coffee"
                      publicId={item.img}
                      crop="scale"
                      className="product-img"
                    />
                  </div>

                  {index === 0 ? (
                    <h3>PROFILE:</h3>
                  ) : index === 1 ? (
                    <h3>ORIGIN:</h3>
                  ) : (
                    <h3>ROAST:</h3>
                  )}

                  <span>{item.title}</span>
                </div>
              ))}
            </div>
            <div className="product-description">
              <h2 className="product-description-title">PRODUCT DESCRIPTION</h2>
              <p className="product-description-content">
                {product.description}
              </p>
            </div>
            <div className="product-discription">
              {product.discription?.map((item, index) => (
                <div key={index} className="discription-item">
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="product-comment">
          <div className="container">
            <div></div>
          </div>
        </section>
        <section className="product-recommended">
          <div className="container">
            <div></div>
          </div>
        </section>
        <section className="product-recently-viewed">
          <div className="container">
            <div></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetail;
