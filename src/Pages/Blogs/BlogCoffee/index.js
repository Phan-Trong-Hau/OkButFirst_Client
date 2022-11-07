import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "./BlogCoffee.scss";
import productsImage from "../../../Assets/img/coffee-101-products.png";
import coffeeDark from "../../../Assets/img/coffee-dark.png";
import coffeeMediumDark from "../../../Assets/img/coffee-medium-dark.png";
import coffeeMedium from "../../../Assets/img/coffee-medium.png";
import darkRoast from "../../../Assets/img/dark_roast.png";
import coffee1 from "../../../Assets/svg/coffee1.svg";
import coffee2 from "../../../Assets/svg/coffee2.svg";
import coffee3 from "../../../Assets/svg/coffee3.svg";
import coffee4 from "../../../Assets/svg/coffee4.svg";
import coffee5 from "../../../Assets/svg/coffee5.svg";
import coffee6 from "../../../Assets/svg/coffee6.svg";
import coffee7 from "../../../Assets/svg/coffee7.svg";
import coffee8 from "../../../Assets/svg/coffee8.svg";
import coffee9 from "../../../Assets/svg/coffee9.svg";
import coffee10 from "../../../Assets/svg/coffee10.svg";
import coffee11 from "../../../Assets/svg/coffee11.svg";
import coffee12 from "../../../Assets/svg/coffee12.svg";
import coffee13 from "../../../Assets/svg/coffee13.svg";
import coffee14 from "../../../Assets/svg/coffee14.svg";
import coffee15 from "../../../Assets/svg/coffee15.svg";
import coffee16 from "../../../Assets/svg/coffee16.svg";
import coffee17 from "../../../Assets/svg/coffee17.svg";
import coffee18 from "../../../Assets/svg/coffee18.svg";
import grindCoffee from '../../../Assets/img/grind-coffee.png';




const BlogCoffee = () => {
    SwiperCore.use([Autoplay]);

    return (
        <>
            <main className="blog">
                <section className="blog-banner">
                    <div className="container">
                        <div className="blog-content">
                            <div className="blog-row">
                                <div className="blog-col">
                                    <h1 className="heading">COFFEE 101</h1>
                                    <p className="desc">
                                        Coffee spelled backwards is “eeffoc.”
                                        Don’t “eeffoc” with my coffee.
                                    </p>
                                </div>
                                <div className="blog-col">
                                    <img
                                        src={productsImage}
                                        alt="coffee-products"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-roasting">
                    <div className="container">
                        <div className="title-wrapper">
                            <h2 className="title">ROASTING TYPES</h2>
                            <p className="desc">
                                Coffee roasting is one of the most influential
                                factors of coffee taste. Roasting transforms
                                green beans into the aromatic and flavorful
                                coffee that wakes our senses and enlightens our
                                days. More importantly, roasting coffee beans is
                                more than just the color of the bean; it's an
                                art form that changes many of the beans'
                                physical attributes and defines the different
                                roasting types we've all come to know.
                            </p>
                        </div>
                        <div className="roast-row">
                            <div className="roast-col">
                                <div className="box">
                                    <div className="img-wrap">
                                        <img
                                            src={coffeeMedium}
                                            alt="coffee-medium"
                                        />
                                    </div>
                                    <span>LIGHT</span>
                                    <ul>
                                        <li>Roasting Temp, 356° - 401°</li>
                                        <li>
                                            Roasted until right after “First
                                            Crack” occurs
                                        </li>
                                        <li>Dry, no oil on surface</li>
                                        <li>Highest amount of caffeine</li>
                                        <li>Light Body</li>
                                        <li>
                                            Most Acidity, often accompanied by
                                            citrus or lemon tone
                                        </li>
                                        <li>
                                            Origin flavors retained and most
                                            recognizable
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roast-col">
                                <div className="box">
                                    <div className="img-wrap">
                                        <img
                                            src={coffeeMediumDark}
                                            alt="coffee-medium-dark"
                                        />
                                    </div>
                                    <span>MEDIUM</span>
                                    <ul>
                                        <li>Roasting Temp, 410° - 428°</li>
                                        <li>
                                            Roasted until just the end of “First
                                            Crack”
                                        </li>
                                        <li>Non-oily surface</li>
                                        <li>Caffeine somewhat decreases</li>
                                        <li>
                                            Thicker body than lighter roasts
                                        </li>
                                        <li>
                                            Balanced flavor, aroma, and acidity
                                        </li>
                                        <li>
                                            Starts to take on flavors of
                                            roasting process
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roast-col">
                                <div className="box">
                                    <div className="img-wrap">
                                        <img
                                            src={coffeeDark}
                                            alt="coffee-dark"
                                        />
                                    </div>
                                    <span>MEDIUM-DARK</span>
                                    <ul>
                                        <li>Roasting Temp, 437° - 446°</li>
                                        <li>
                                            Roasted until just after “Second
                                            Crack”
                                        </li>
                                        <li>Some oil on the surface</li>
                                        <li>
                                            Caffeine levels decreases further
                                        </li>
                                        <li>
                                            More body, richer, fuller flavor
                                        </li>
                                        <li>
                                            Acidity decreases further and begins
                                            to disappear
                                        </li>
                                        <li>
                                            Flavors and aromas of roasting
                                            process more noticeable
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roast-col">
                                <div className="box">
                                    <div className="img-wrap">
                                        <img src={darkRoast} alt="dark-roast" />
                                    </div>
                                    <span>DARK</span>
                                    <ul>
                                        <li>Roasting Temp, 464° - 482°</li>
                                        <li>
                                            Roasted until end of “Second Crack”
                                        </li>
                                        <li>Shiny, oily surface</li>
                                        <li>Least amount of caffeine</li>
                                        <li>
                                            Robust full body, rich and sweeter
                                        </li>
                                        <li>
                                            Least amount of acidity of all
                                            coffee roasts
                                        </li>
                                        <li>
                                            Flavors of roasting process most
                                            prominent
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-drinks">
                    <div className="container">
                        <div className="title-wrapper">
                            <h2 className="title">SPECIALITY COFFEE DRINKS</h2>
                        </div>
                        <div className="slider-drinks">
                            <Swiper
                                className="set-swiper"
                                autoplay={{ delay: 3000 }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[EffectFade, Pagination]}
                                loop={true}
                                loopFillGroupWithBlank={true}
                            >
                                <SwiperSlide>
                                    <div className="slide-row">
                                        <div className="slide-col">
                                            <img src={coffee1} alt="coffee1" />
                                            <div className="content">
                                                <h5>ESPRESSO</h5>
                                                <p>Espresso 1oz</p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img src={coffee2} alt="coffee2" />
                                            <div className="content">
                                                <h5>ESPRESSO DOPPIO</h5>
                                                <p>Espresso 2oz</p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img src={coffee3} alt="coffee3" />
                                            <div className="content">
                                                <h5>RISTRETTO</h5>
                                                <p>
                                                    Concentrated Espresso 0.75oz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img src={coffee4} alt="coffee4" />
                                            <div className="content">
                                                <h5>LUNGO</h5>
                                                <p>
                                                    Less Concentrated Espresso
                                                    3oz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img src={coffee5} alt="coffee5" />
                                            <div className="content">
                                                <h5>CAFE MACCHIATO</h5>
                                                <p>
                                                    Dot of foam milk, Espresso
                                                    2oz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img src={coffee6} alt="coffee6" />
                                            <div className="content">
                                                <h5>CAFE CREAME</h5>
                                                <p>
                                                    Heavy cream 1 oz, Espresso
                                                    2oz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img src={coffee7} alt="coffee7" />
                                            <div className="content">
                                                <h5>CAFE NOISETTE</h5>
                                                <p>
                                                    Hot milk 1oz, Espresso 2 oz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img src={coffee8} alt="coffee8" />
                                            <div className="content">
                                                <h5>CAFE CORTADO</h5>
                                                <p>
                                                    Foamed Milk 1oz, Espresso
                                                    2oz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img src={coffee9} alt="coffee9" />
                                            <div className="content">
                                                <h5>CAPPUCCINO</h5>
                                                <p>
                                                    Foamed milk 2oz, Steamed
                                                    milk 2oz, Espresso 2oz
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slide-row">
                                        <div className="slide-col">
                                            <img
                                                src={coffee10}
                                                alt="coffee10"
                                            />
                                            <div className="content">
                                                <h5>DRY CAPPUCCINO</h5>
                                                <p>
                                                    Milk foam 4oz, Espresso 2oz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img
                                                src={coffee11}
                                                alt="coffee11"
                                            />
                                            <div className="content">
                                                <h5>CAFFE AMERICANO</h5>
                                                <p>
                                                    Hot Water 3oz, Espresso 2oz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img
                                                src={coffee12}
                                                alt="coffee12"
                                            />
                                            <div className="content">
                                                <h5>CAFE CON HIELO</h5>
                                                <p>Espresso 2oz, Ice cubes</p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img
                                                src={coffee13}
                                                alt="coffee13"
                                            />
                                            <div className="content">
                                                <h5>BREVE</h5>
                                                <p>
                                                    Half & half 3oz, Espresso
                                                    2oz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img
                                                src={coffee14}
                                                alt="coffee14"
                                            />
                                            <div className="content">
                                                <h5>MOCHA BREVE</h5>
                                                <p>
                                                    Half & half 2oz, chocolate
                                                    2oz, Espresso 2oz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img
                                                src={coffee15}
                                                alt="coffee15"
                                            />
                                            <div className="content">
                                                <h5>MOCHA</h5>
                                                <p>
                                                    Steamed milk 1oz, chocolate
                                                    2oz, Espresso 2oz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img
                                                src={coffee16}
                                                alt="coffee16"
                                            />
                                            <div className="content">
                                                <h5>CAFFE AFFOGATO</h5>
                                                <p>
                                                    Espresso 2oz, Vanila Ice
                                                    cream 2oz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img
                                                src={coffee17}
                                                alt="coffee17"
                                            />
                                            <div className="content">
                                                <h5>VIENNOIS</h5>
                                                <p>
                                                    Whipped cream 2oz, hot milk
                                                    2oz, Espresso 2oz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img
                                                src={coffee18}
                                                alt="coffee18"
                                            />
                                            <div className="content">
                                                <h5>CON PANNA</h5>
                                                <p>Whipped 3oz, Espresso 2oz</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slide-row">
                                        <div className="slide-col">
                                            <img
                                                src={coffee17}
                                                alt="coffee17"
                                            />
                                            <div className="content">
                                                <h5>VIENNOIS</h5>
                                                <p>
                                                    Whipped cream 2oz, hot milk
                                                    2oz, Espresso 2oz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img
                                                src={coffee17}
                                                alt="coffee17"
                                            />
                                            <div className="content">
                                                <h5>VIENNOIS</h5>
                                                <p>
                                                    Whipped cream 2oz, hot milk
                                                    2oz, Espresso 2oz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img
                                                src={coffee17}
                                                alt="coffee17"
                                            />
                                            <div className="content">
                                                <h5>VIENNOIS</h5>
                                                <p>
                                                    Whipped cream 2oz, hot milk
                                                    2oz, Espresso 2oz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img
                                                src={coffee17}
                                                alt="coffee17"
                                            />
                                            <div className="content">
                                                <h5>VIENNOIS</h5>
                                                <p>
                                                    Whipped cream 2oz, hot milk
                                                    2oz, Espresso 2oz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="slide-col">
                                            <img
                                                src={coffee17}
                                                alt="coffee17"
                                            />
                                            <div className="content">
                                                <h5>VIENNOIS</h5>
                                                <p>
                                                    Whipped cream 2oz, hot milk
                                                    2oz, Espresso 2oz
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>
                <section className="blog-grind">
                    <div className="container">
                        <div className="title-wrapper">
                            <h2 className="title">GRIND & METHOD GUIDE</h2>
                        </div>
                        <div className="grind-row">
                            <div className="grind-col">
                                <div className="img-wrap">
                                    <img src={grindCoffee} alt="grind-coffee" />
                                </div>
                            </div>
                            <div className="grind-col">
                                <div className="grind-group">
                                    <h5>FRENCH PRESS</h5>
                                    <p>
                                        The French press is an immersion brewing
                                        method, meaning that the coffee extracts
                                        while it is submerged in water. After it
                                        is allowed to brew for a certain amount
                                        of time, the filter is plunged downwards
                                        to separate the grounds from the brewed
                                        coffee.
                                    </p>
                                </div>
                                <div className="grind-group">
                                    <h5>CHEMEX</h5>
                                    <p>
                                        This technique brews coffee using the
                                        infusion method, making it similar to
                                        drip coffee in terms of body and taste.
                                        Chemex filters are 20-30% thicker than
                                        those used by other pour over methods
                                        such as the Hario.
                                    </p>
                                </div>
                                <div className="grind-group">
                                    <h5>DRIP / MACHINE-DRIP</h5>
                                    <p>
                                        Drip-brewed, or filtered coffee, is
                                        brewed by hot water passing slowly over
                                        roasted, ground coffee beans contained
                                        in a filter. Water seeps through the
                                        ground coffee, absorbing its oils,
                                        flavors, and essences as it passes
                                        through the filter.
                                    </p>
                                </div>
                                <div className="grind-group">
                                    <h5>SIPHON</h5>
                                    <p>
                                        Vacuum coffee brewing, has been around
                                        since the 1800’s where people
                                        experimented with vacuum and vapor
                                        pressure. There are two chambers; the
                                        first is filled with water and by
                                        heating the bottom chamber, vapor
                                        pressure forces the water to rise into
                                        the upper chamber.
                                    </p>
                                </div>
                                <div className="grind-group">
                                    <h5>AEROPRESS / ESPRESSO</h5>
                                    <p>
                                        AeroPress… is a new kind of coffee press
                                        that uses a rapid, total immersion
                                        brewing process to make smooth,
                                        delicious, full flavored coffee without
                                        bitterness and with low acidity.
                                        Espresso… is brewed by machine, forcing
                                        a small amount of nearly boiling water
                                        and steam (187 °F to 203 °F), under
                                        pressure through finely ground and
                                        compacted coffee.
                                    </p>
                                </div>
                                <div className="grind-group">
                                    <h5>TURKISH COFFEE</h5>
                                    <p>
                                        Beans are ground to a fine powder.
                                        Turkish coffee is prepared by immersing
                                        the coffee grounds into water and
                                        heating until it just boils, using a
                                        special pot called a cezve.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default BlogCoffee;
