import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Image } from "cloudinary-react";

import "./CoffeeClub.scss";
import CoffeeClubProduct from "../../Assets/img/coffee-club-product.png";
import truck from "../../Assets/svg/truck.svg";
import pickup from "../../Assets/svg/pickup.svg";
import calculator from "../../Assets/svg/calculator.svg";
import cupSize6 from "../../Assets/img/cup-size-6.png";
import cupSize8 from "../../Assets/img/cup-size-8.png";
import cupSize10 from "../../Assets/img/cup-size-10.png";
import cupSize12 from "../../Assets/img/cup-size-12.png";
import bag from "../../Assets/svg/bag.svg";
import bag1 from "../../Assets/svg/bag-size-1.svg";
import bag2 from "../../Assets/svg/bag-size-2.svg";
import bag3 from "../../Assets/svg/bag-size-3.svg";
import bag4 from "../../Assets/svg/bag-size-4.svg";
import bag5 from "../../Assets/svg/bag-size-5.svg";
import bag6 from "../../Assets/svg/bag-size-6.svg";
import bag7 from "../../Assets/svg/bag-size-7.svg";
import bag8 from "../../Assets/svg/bag-size-8.svg";
import fourWeek from "../../Assets/svg/every-four-weeks.svg";
import threeWeek from "../../Assets/svg/every-three-weeks.svg";
import twoWeek from "../../Assets/svg/every-two-weeks.svg";
import everyWeek from "../../Assets/svg/every-week.svg";
import coffeeCup from "../../Assets/svg/coffeeCup.svg";

const CoffeeClub = () => {
    const selector = useSelector((state) => state.products);
    const [products, setProducts] = useState([]);
    const [cupSize, setCupSize] = useState(null);
    const [numberOfCoffee, setNumberOfCoffee] = useState(null);
    const [frequency, setFrequency] = useState(null);
    const [error1, setError1] = useState(null);
    const [error2, setError2] = useState(null);
    const [error3, setError3] = useState(null);
    const [data, setData] = useState({});
    const [valid, setValid] = useState();
    const bagSize = [bag1, bag2, bag3, bag4, bag5, bag6, bag7, bag8];
    const weekList = [everyWeek, twoWeek, threeWeek, fourWeek]
    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "coffeeCupSize") setCupSize(value);
        if (name === "numberOfCoffee") setNumberOfCoffee(value);
        if (name === "frequency") setFrequency(value);
    };

    const handleOnSubmitCalc = (e) => {
        e.preventDefault();

        if (!cupSize) setError1("Please select coffee cup size.");
        else setError1(null);
        if (!numberOfCoffee)
            setError2("Please enter number cups of coffee/day you drink .");
        else setError2(null);
        if (!frequency) setError3("Please select order frequency.");
        else setError3(null);

        if (cupSize && frequency && numberOfCoffee) {
            const coffeeSize = cupSize * frequency * numberOfCoffee;
            const numberOfCup = numberOfCoffee * frequency;
            const sizeOfCoffee = ((coffeeSize * 50) / 3).toFixed();
            let suggestSize, bags;

            if (coffeeSize <= 12) {
                suggestSize = 12;
                bags = 1;
            } else if (coffeeSize <= 24) {
                suggestSize = 24;
                bags = 2;
            } else if (coffeeSize <= 36) {
                suggestSize = 36;
                bags = 3;
            } else if (coffeeSize <= 48) {
                suggestSize = 48;
                bags = 4;
            } else if (coffeeSize <= 60) {
                suggestSize = 60;
                bags = 5;
            } else if (coffeeSize <= 72) {
                suggestSize = 72;
                bags = 6;
            } else if (coffeeSize <= 84) {
                suggestSize = 84;
                bags = 7;
            } else if (coffeeSize <= 96) {
                suggestSize = 96;
                bags = 8;
            } else {
                suggestSize = 96;
                bags = 8;
            }

            setData({
                bags,
                suggestSize,
                numberOfCup,
                sizeOfCoffee,
                frequency,
            });
            setValid(true);
        } else setValid(false);
    };

    const attributeRoastList = products.map((product, index) => (
        <div
            className="roast-group"
            style={{
                background: `${product?.color.colorBgRoast}`,
                outline: `2px solid ${product?.color.colorBorderRoast}`,
            }}
            key={index}
        >
            <div className="roast-box">
                <h5>{product?.making[2]?.title}</h5>
                <h4>{product?.name}</h4>
                <div className="middle">
                    <span>L</span>
                    <Image
                        cloudName="ok-but-first-coffee"
                        publicId={product?.imageMiddleRoast}
                        crop="scale"
                        className="product-img"
                    />
                    <span>D</span>
                </div>
                <div className="custom-calc-radio">
                    <label>
                        <span>Select</span>
                        <input
                            type="radio"
                            name="productName"
                            value={product?.name}
                        />
                    </label>
                </div>
            </div>
        </div>
    ));

    const bagQuantityList = [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div className="quantity-box" key={item}>
            <div className="offLabel">
                <label>5% OFF</label>
            </div>
            <div className="custom-calc-radio">
                <h5>{item === 1 ? `${item} bag` : `${item} bags`}</h5>
                <img src={bagSize[item - 1]} alt="bag" />
                <h4> {item * 12} OZ</h4>
                <p>About {item * 30} cups per shipment.</p>
                <label>
                    <span>Select</span>
                    <input
                        type="radio"
                        name="SingleOptionSelector"
                        value={`${item * 12} OZ`}
                    />
                </label>
            </div>
        </div>
    ));

    const shippingFrequency = [
        "Every Week",
        "Every Two Weeks",
        "Every Three Weeks",
        "Every Four Weeks",
    ].map((item, index) => (
        <div className="quantity-box" key={index}>
            <div className="custom-calc-radio">
                <img src={weekList[index]} alt="week" />
                <p className="shipping-frequency">{item}</p>
                <label>
                    <span>Select</span>
                    <input
                        type="radio"
                        name="shippingFrequency"
                        value={`${item * 12} OZ`}
                    />
                </label>
            </div>
        </div>
    ));

    useEffect(() => {
        setProducts(selector);
    }, [selector]);
    useEffect(() => {
        document.title =
            "Coffee Club Subscription For Roasted Coffee Beans Online | OKBF";
    }, []);

    console.log(products);

    return (
        <>
            <main className="coffee-club">
                <section className="subscribe-banner">
                    <div className="container">
                        <div className="sub-banner-row">
                            <div className="sub-col">
                                <div className="sub-banner">
                                    <img
                                        src={CoffeeClubProduct}
                                        alt="Coffee-Club-Product"
                                    />
                                </div>
                            </div>
                            <div className="sub-col">
                                <div className="sub-content">
                                    <h1 className="sub-title">
                                        A YAWN IS A SILENT SCREAM FOR COFFEE.
                                        NEVER RUN OUT!
                                    </h1>
                                    <p className="sub-desc">
                                        Join the club, get club member-only
                                        perks.
                                    </p>
                                    <ul className="featuring">
                                        <li>Free Shipping</li>
                                        <li>Save more, up to 10% off</li>
                                        <li>Freshly-roasted whole beans</li>
                                        <li>
                                            Each 12 oz. bag makes ~30 cups of
                                            coffee
                                        </li>
                                        <li>
                                            Delivered on your schedule, straight
                                            to your door
                                        </li>
                                    </ul>
                                    <button className="theme-btn__white">
                                        Get Start
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-club">
                    <div className="container">
                        <div className="club-wrapper">
                            <div className="club-title title-wrapper">
                                <h2 className="title">HOW IT ALL WORKS</h2>
                            </div>
                            <div className="club-box">
                                <div className="club-box__item">
                                    <img src={calculator} alt="calc" />
                                    <p>1. Calculate your coffee needs </p>
                                </div>
                                <div className="club-box__item">
                                    <img src={pickup} alt="pickup" />
                                    <p>2. Pickup your favorite roast </p>
                                </div>
                                <div className="club-box__item">
                                    <img src={truck} alt="truck" />
                                    <p>
                                        3. Free shipping, delivered to your
                                        door!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-know">
                    <div className="container">
                        <div className="know-wrapper">
                            <div className="title-wrapper">
                                <h2 className="title">
                                    CALCULATE, BEFORE YOU CAFFEINATE
                                </h2>
                            </div>
                            <div className="coffee-calc">
                                <form
                                    acceptCharset="UTF-8"
                                    onSubmit={handleOnSubmitCalc}
                                >
                                    <input
                                        type="hidden"
                                        name="utf8"
                                        value={"✓"}
                                    />
                                    <div className="coffee-cup__size">
                                        <h4>Select cup size</h4>
                                        <label
                                            className={
                                                cupSize === "0.36"
                                                    ? "radio-img radio-bg"
                                                    : "radio-img"
                                            }
                                        >
                                            <input
                                                type="radio"
                                                name="coffeeCupSize"
                                                value="0.36"
                                                onChange={handleOnChange}
                                            />
                                            <img
                                                src={cupSize6}
                                                alt="the coffee beans | buy coffee beans online"
                                            />
                                        </label>
                                        <label
                                            className={
                                                cupSize === "0.48"
                                                    ? "radio-img radio-bg"
                                                    : "radio-img"
                                            }
                                        >
                                            <input
                                                type="radio"
                                                name="coffeeCupSize"
                                                value="0.48"
                                                onChange={handleOnChange}
                                            />
                                            <img
                                                src={cupSize8}
                                                alt="the coffee beans | buy coffee beans online"
                                            />
                                        </label>
                                        <label
                                            className={
                                                cupSize === "0.6"
                                                    ? "radio-img radio-bg"
                                                    : "radio-img"
                                            }
                                        >
                                            <input
                                                type="radio"
                                                name="coffeeCupSize"
                                                value="0.6"
                                                onChange={handleOnChange}
                                            />
                                            <img
                                                src={cupSize10}
                                                alt="the coffee beans | buy coffee beans online"
                                            />
                                        </label>
                                        <label
                                            className={
                                                cupSize === "0.72"
                                                    ? "radio-img radio-bg"
                                                    : "radio-img"
                                            }
                                        >
                                            <input
                                                type="radio"
                                                name="coffeeCupSize"
                                                value="0.72"
                                                onChange={handleOnChange}
                                            />
                                            <img
                                                src={cupSize12}
                                                alt="the coffee beans | buy coffee beans online"
                                            />
                                        </label>
                                    </div>
                                    <div className="coffee-numberOfCup">
                                        <h4>
                                            Enter number of cup coffee, you
                                            drink per day.
                                        </h4>
                                        <label htmlFor="numberOfCoffee">
                                            <img
                                                src={coffeeCup}
                                                alt="coffee cup"
                                            />
                                            <div className="wrapper-input">
                                                <input
                                                    type="text"
                                                    id="numberOfCoffee"
                                                    name="numberOfCoffee"
                                                    placeholder="Enter Number cups of coffee/day you drink"
                                                    onChange={handleOnChange}
                                                />
                                                <span className="focus-border">
                                                    <i></i>
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="coffee-frequency">
                                        <h4>Select Order Frequency</h4>
                                        <input
                                            type="radio"
                                            id="1week"
                                            name="frequency"
                                            value="7"
                                            onChange={handleOnChange}
                                        />
                                        <label
                                            htmlFor="1week"
                                            style={
                                                frequency === "7"
                                                    ? {
                                                          border: "1px solid rgba(0,0,0)",
                                                      }
                                                    : {}
                                            }
                                        >
                                            1 Week
                                        </label>
                                        <input
                                            type="radio"
                                            id="2week"
                                            name="frequency"
                                            value="14"
                                            onChange={handleOnChange}
                                        />
                                        <label
                                            htmlFor="2week"
                                            style={
                                                frequency === "14"
                                                    ? {
                                                          border: "1px solid rgba(0,0,0)",
                                                      }
                                                    : {}
                                            }
                                        >
                                            2 Week
                                        </label>
                                        <input
                                            type="radio"
                                            id="3week"
                                            name="frequency"
                                            value="21"
                                            onChange={handleOnChange}
                                        />
                                        <label
                                            htmlFor="3week"
                                            style={
                                                frequency === "21"
                                                    ? {
                                                          border: "1px solid rgba(0,0,0)",
                                                      }
                                                    : {}
                                            }
                                        >
                                            3 Week
                                        </label>
                                        <input
                                            type="radio"
                                            id="4week"
                                            name="frequency"
                                            value="28"
                                            onChange={handleOnChange}
                                        />
                                        <label
                                            htmlFor="4week"
                                            style={
                                                frequency === "28"
                                                    ? {
                                                          border: "1px solid rgba(0,0,0)",
                                                      }
                                                    : {}
                                            }
                                        >
                                            4 Week
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="theme-btn__black"
                                    >
                                        calculate
                                    </button>
                                </form>
                            </div>
                            <div className="result">
                                {valid && (
                                    <>
                                        <div className="suggest">
                                            Your consumption is
                                            <b>
                                                <span className="cups">
                                                    {" "}
                                                    {data.numberOfCup}{" "}
                                                </span>
                                                cups
                                                <span className="oz">
                                                    {" "}
                                                    {data.sizeOfCoffee}{" "}
                                                </span>
                                                oz
                                            </b>
                                            .
                                        </div>
                                        <div className="suggest">
                                            We recommend you order
                                            <b>
                                                <span className="suggest-content">
                                                    <br />
                                                    <span className="bags">
                                                        {" "}
                                                        {data.bags}{" "}
                                                    </span>
                                                    Bag(s)
                                                    <span className="SuggestedBag">
                                                        {" "}
                                                        {data.suggestSize}{" "}
                                                    </span>
                                                    oz
                                                    <img src={bag} alt="bag" />
                                                </span>
                                            </b>
                                        </div>
                                        <div className="suggest">
                                            Based on
                                            <span className="baseFrequency">
                                                {" "}
                                                {data.frequency}{" "}
                                            </span>
                                            Days
                                        </div>
                                    </>
                                )}
                                {error1 && (
                                    <div className="errorMsg">{error1}</div>
                                )}
                                {error2 && (
                                    <div className="errorMsg">{error2}</div>
                                )}
                                {error3 && (
                                    <div className="errorMsg">{error3}</div>
                                )}
                            </div>
                            <div className="get-start">get start</div>
                        </div>
                    </div>
                </section>
                <section className="product-single">
                    <div className="container">
                        <form acceptCharset="UTF-8">
                            <input
                                type="hidden"
                                name="form_type"
                                value="product"
                            />
                            <input type="hidden" name="utf8" value={"✓"} />
                            <h3 className="calc-title">
                                “A yawn is a silent scream for coffee.”
                            </h3>
                            <div className="calc-step-one">
                                <div className="title-wrapper">
                                    <h2 className="title">
                                        1. SELECT YOUR ROAST
                                    </h2>
                                </div>
                                <div className="attribute-roast">
                                    {attributeRoastList}
                                </div>
                            </div>
                            <div className="calc-step-two">
                                <div className="title-wrapper">
                                    <h2 className="title">
                                        2. CHOOSE YOUR BAG QUANTITY
                                    </h2>
                                </div>
                                <div className="bag-quantity">
                                    {bagQuantityList}
                                </div>
                            </div>
                            <div className="calc-step-three">
                                <div className="title-wrapper">
                                    <h2 className="title">
                                        3. CHOOSE YOUR SHIPPING FREQUENCY
                                    </h2>
                                </div>
                                <div className="bag-quantity">
                                    {shippingFrequency}
                                </div>
                            </div>
                            <div className="calc-step-four">
                                <div className="title-wrapper">
                                    <h2 className="title">4. ORDER SUMMARY</h2>
                                </div>
                                <div className="order-summery"></div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
};

export default CoffeeClub;
