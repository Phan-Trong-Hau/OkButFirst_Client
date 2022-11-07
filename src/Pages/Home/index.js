import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { useSelector } from "react-redux";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "./home.scss";

import cupSize6 from "../../Assets/img/cup-size-6.png";
import cupSize8 from "../../Assets/img/cup-size-8.png";
import cupSize10 from "../../Assets/img/cup-size-10.png";
import cupSize12 from "../../Assets/img/cup-size-12.png";
import journeyLogo from "../../Assets/img/journeyLogo.png";
import journeyStory from "../../Assets/img/journeyStory.png";

import bag from "../../Assets/svg/bag.svg";
import truck from "../../Assets/svg/truck.svg";
import pickup from "../../Assets/svg/pickup.svg";
import quality from "../../Assets/svg/quality.svg";
import coffeeCup from "../../Assets/svg/coffeeCup.svg";
import qualityCup from "../../Assets/svg/qualityCup.svg";
import calculator from "../../Assets/svg/calculator.svg";
import handCrafted from "../../Assets/svg/handCrafted.svg";

import Card from "../../Components/Card";

const Home = () => {
    SwiperCore.use([Autoplay]);
    const selector = useSelector((state) => state.products);

    const [width, setWidth] = useState(window.innerWidth);
    const [cupSize, setCupSize] = useState(null);
    const [numberOfCoffee, setNumberOfCoffee] = useState(null);
    const [frequency, setFrequency] = useState(null);
    const [error1, setError1] = useState(null);
    const [error2, setError2] = useState(null);
    const [error3, setError3] = useState(null);
    const [data, setData] = useState({});
    const [valid, setValid] = useState();
    const [email, setEmail] = useState();
    const [fetchProducts, setFetchProducts] = useState();

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "coffeeCupSize") setCupSize(value);
        if (name === "numberOfCoffee") setNumberOfCoffee(value);
        if (name === "frequency") setFrequency(value);
        if (name === "email") setEmail(value);
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

    const handleOnSubmitEmail = (e) => {
        e.preventDefault();
        alert("Thanks for subscribing!");
    };

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        document.title =
            "Buy Organic & Roasted Coffee Beans Online | 100% Arabica | OKBF";
    }, []);

    useEffect(() => {
        setFetchProducts(selector);
    }, [selector]);

    const listProducts = fetchProducts?.map((products, index) => {
        return (
            <SwiperSlide key={index}>
                <Card
                    img={products.imageDisplay}
                    title={products.name}
                    price={products.price}
                    newBadge={products.newBadge}
                />
            </SwiperSlide>
        );
    });

    return (
        <>
            <main className="home">
                <section className="home-slide">
                    <Swiper
                        className="set-swiper"
                        autoplay={{ delay: 3000 }}
                        modules={[EffectFade, Pagination]}
                        effect={"fade"}
                        pagination={{
                            clickable: true,
                        }}
                    >
                        <SwiperSlide className="set-slide">
                            <div className="container">
                                <div className="slide-content">
                                    <h2 className="slide-title">
                                        Nothing Makes Sense Before Coffee
                                    </h2>
                                    <p className="slide-desc">
                                        Introducing your mug’s new best friend
                                    </p>
                                    <Link
                                        to="/collections/coffee-shop"
                                        className="theme-btn__white"
                                    >
                                        Shop now
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="set-slide">
                            <div className="container">
                                <div className="slide-content">
                                    <h2 className="slide-title">
                                        A Yawn Is A Silent Scream For Coffee.
                                        Never Run Out!
                                    </h2>
                                    <p className="slide-desc">
                                        Join Our Coffee Club for Special
                                        Discounts!
                                    </p>
                                    <Link
                                        to="/products/coffee-club-subscription"
                                        className="theme-btn__white"
                                    >
                                        Join Now
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="set-slide">
                            <div className="container">
                                <div className="slide-content">
                                    <h2 className="slide-title">
                                        Coffee, because adulting is hard
                                    </h2>
                                    <p className="slide-desc">
                                        Calculate your consumption needs before
                                        you order!
                                    </p>
                                    <Link to="#" className="theme-btn__white">
                                        Try it Now
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="set-slide">
                            <div className="container">
                                <div className="slide-content">
                                    <h2 className="slide-title">
                                        Expresso Yourself
                                    </h2>
                                    <p className="slide-desc">
                                        Drink great coffee, look good while
                                        doing it!
                                    </p>
                                    <Link
                                        to="/collections/merch-shop"
                                        className="theme-btn__black"
                                    >
                                        Shop now
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>
                <section className="home-journey">
                    <div className="container">
                        <div className="journey-wrapper">
                            <div className="journey-img">
                                <img src={journeyLogo} alt="journey-logo" />
                                <img src={journeyStory} alt="journey-story" />
                            </div>
                            <div className="title-wrapper journey-content">
                                <h2 className=" title">OUR JOURNEY</h2>
                                <p className=" desc">
                                    Choosing exceptional coffee, shouldn’t be a
                                    struggle. We wanted to simplify this
                                    process, by creating premium roasts that
                                    inspire your mornings, accelerate your days,
                                    and relax your evenings
                                </p>
                                <Link
                                    to="/pages/about-us"
                                    className="theme-btn__black"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-product">
                    <div className="container">
                        <div className="product-wrapper">
                            <div className="title-wrapper product-title">
                                <h2 className="title">Our Products</h2>
                            </div>
                            <div className="slice-wrapper">
                                <Swiper
                                    slidesPerView={
                                        width > 992 ? 3 : width > 426 ? 2 : 1
                                    }
                                    spaceBetween={30}
                                    loop={width > 992 ? false : true}
                                    loopFillGroupWithBlank={
                                        width > 992 ? false : true
                                    }
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                >
                                    {listProducts}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-club">
                    <div className="container">
                        <div className="club-wrapper">
                            <div className="club-title title-wrapper">
                                <h2 className="title">COFFEE CLUB</h2>
                                <div className="desc">“How it works!”</div>
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
                                <h2 className="title">DID YOU KNOW?</h2>
                                <p className="desc">
                                    It takes 70 coffee beans to make 1 cup of
                                    coffee.
                                    <br />
                                    <b>Try our coffee calculator</b>, and learn
                                    how much coffee you'll need to stock up!
                                </p>
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
                            <div className="blow">
                                <div className="title-wrapper">
                                    <div className="desc">
                                        “A yawn is a silent scream for coffee.”
                                    </div>
                                </div>
                                <Link
                                    to="/products/coffee-club-subscription"
                                    className="theme-btn__black"
                                >
                                    NEVER RUN OUT,
                                    <b> SUBSCRIBE TODAY!</b>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-quality">
                    <div className="container">
                        <div className="quality-wrapper">
                            <div className="title-wrapper">
                                <h2 className="title">Quality Matters</h2>
                            </div>
                            <div className="quality-flip">
                                <div className="flip-inner">
                                    <div className="quality-box">
                                        <div className="quality-box__item">
                                            <img
                                                src={handCrafted}
                                                alt="hand-crafted"
                                            />
                                            <p>Hand Crafted</p>
                                        </div>
                                        <div className="box-content">
                                            <div className="box-inner">
                                                <h4 className="subtitle">
                                                    Hand Crafted
                                                </h4>
                                                <p className="desc">
                                                    Artisan care, less mass
                                                    production. Craft coffee is
                                                    the craftsmanship behind
                                                    each cup. Artisans who take
                                                    special care through each
                                                    step of the creative
                                                    process, from bean selection
                                                    at the point of origin, to
                                                    roasting methods. OKBF
                                                    coffee is Small Batch
                                                    Artisan Roasted.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-inner">
                                    {" "}
                                    <div className="quality-box">
                                        <div className="quality-box__item">
                                            <img src={quality} alt="quality" />
                                            <p>Exotic Farm Location</p>
                                        </div>
                                        <div className="box-content">
                                            <div className="box-inner">
                                                <h4 className="subtitle">
                                                    Exotic Farm Location
                                                </h4>
                                                <p className="desc">
                                                    Think of coffee beans the
                                                    way people think of wine
                                                    grapes. Just like wine,
                                                    coffee tastes different
                                                    depending on where it is
                                                    grown, the vineyard or
                                                    coffee farm it’s from, and
                                                    the season. Just like wine,
                                                    coffee comes from a living
                                                    plant that can expire, so
                                                    choosing carefully selected
                                                    beans makes sense. OKBF
                                                    coffee is responsibly
                                                    sourced from exotic farm
                                                    locations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-inner">
                                    <div className="quality-box">
                                        <div className="quality-box__item">
                                            <img
                                                src={qualityCup}
                                                alt="quality-cup"
                                            />
                                            <p>Specialty Grade Coffee</p>
                                        </div>
                                        <div className="box-content">
                                            <div className="box-inner">
                                                <h4 className="subtitle">
                                                    Specialty Grade Coffee
                                                </h4>
                                                <p className="desc">
                                                    Specialty (premium, gourmet)
                                                    coffee is a coffee or coffee
                                                    experience recognized for
                                                    its distinctive attributes,
                                                    and because of these
                                                    attributes, has significant
                                                    extra value in the
                                                    marketplace. It is a
                                                    dedication to quality and
                                                    care. OKBF is a specialty
                                                    graded coffee
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-blog">
                    <div className="container">
                        <div className="blog-wrapper">
                            <div className="blog-heading">
                                <h2>Coffee 101</h2>
                            </div>
                            <div className="blog-content">
                                <p>
                                    the magical substance that turns <br />
                                    "leave me alone or die" into "good <br />
                                    morning honey!"
                                </p>
                                <Link
                                    to="/blogs/coffee-101"
                                    className="theme-btn__black"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-join">
                    <div className="container">
                        <div className="join-wrapper">
                            <div className="subtitle title-wrapper">
                                <h2 className="title">
                                    GET THE SCOOP! JOIN OUR MAILING LIST
                                </h2>
                            </div>

                            <form
                                className="join-input"
                                onSubmit={handleOnSubmitEmail}
                                acceptCharset='UTF-8'
                            >
                                <input type="hidden" name="utf8" value={"✓"} />
                                <div className="wrapper-input">
                                    <input
                                        type="email"
                                        placeholder="Enter Email"
                                        name="email"
                                        value={email}
                                        onChange={handleOnChange}
                                    />
                                    <span className="focus-border">
                                        <i></i>
                                    </span>
                                </div>
                                <button
                                    type="submit"
                                    className="theme-btn__black"
                                >
                                    Join
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
