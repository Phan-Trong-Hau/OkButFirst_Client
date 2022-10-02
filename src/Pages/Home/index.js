import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "./home.scss";
import journeyLogo from "../../Assets/img/journeyLogo.png";
import journeyStory from "../../Assets/img/journeyStory.png";
import { useEffect } from "react";

const Home = () => {
    SwiperCore.use([Autoplay]);

    useEffect(() => {
        document.title =
            "Buy Organic & Roasted Coffee Beans Online | 100% Arabica | OKBF";
    }, []);

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
                            <div className="content journey-content">
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
            </main>
        </>
    );
};

export default Home;
