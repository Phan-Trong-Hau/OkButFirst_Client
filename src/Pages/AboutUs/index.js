import "./AboutUs.scss";
import aboutBanner from "../../Assets/img/about-banner.png";
import about1 from "../../Assets/img/about-info-1.png";
import about2 from "../../Assets/img/about-info-2.png";
import about3 from "../../Assets/img/about-info-3.png";
const AboutUs = () => {
    return (
        <>
            <main className="about-us">
                <section className="about-who">
                    <div className="container">
                        <div className="about-wrapper">
                            <div className="about-row">
                                <div className="about-col">
                                    <img
                                        src={aboutBanner}
                                        alt="about-banner-ok-but-first-coffee"
                                    />
                                </div>
                                <div className="about-col">
                                    <h2 className="about-title">Our story</h2>
                                    <p className="about-content">
                                        Coffee is so much more than a drink that
                                        gives us that much needed jolt
                                        throughout our day. It is one of the
                                        oldest beverages that have long been
                                        bringing people together. Coffee is part
                                        of the moments we create and the
                                        experiences that unite us.
                                    </p>
                                    <br />
                                    <p className="about-content">
                                        Growing up in a big family, coffee has
                                        always been the connection that bound us
                                        through our gatherings, the stories we
                                        shared and memories we made. Far back as
                                        I can remember, the aroma alone,
                                        permeating from the stovetop percolator,
                                        was a signal that the night was far from
                                        over. It was an excuse for us to linger
                                        longer and form deeper connections. To
                                        say that we've grown a passion for
                                        coffee is an understatement. And to this
                                        day, a freshly brewed cup of coffee is
                                        something that somehow teleports us back
                                        to a place or memory, while continuing
                                        to ignite new memories now and in the
                                        future.
                                    </p>
                                    <br />
                                    <p className="about-content">
                                        Coffee is that familiar friend we all
                                        know; that casual encounter that allows
                                        us to foster comfortable relationships
                                        between each other. Coffee is family.
                                        Coffee is friends. Coffee is memories.
                                        Coffee is love. Ok, but first… coffee!
                                    </p>
                                </div>
                            </div>
                            <div className="title-bottom">
                                OK, BUT FIRST COFFEE
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-journey">
                    <div className="container">
                        <div className="about-wrapper">
                            <h2 className="about-title"> our mission</h2>
                            <p className="about-content">
                                Coffee plays a major role in our lives, and the
                                center point of our connections. As such, having
                                quality coffee is vital to helping create those
                                experiences and memories. Back in the day, great
                                coffee was not easy to come by. Options were
                                limited, from the mass-produced brands stocked
                                on grocery shelves, to the overpriced retail
                                chain coffee shops we all have come to know.
                                Even today, finding great coffee, seems to only
                                happen by stumbling upon that random local
                                roaster along our travels. For the majority,
                                those local roasters aren’t easily accessible.
                                And so, we simply got tired of drinking bland
                                coffee and never finding a roast we truly loved.
                            </p>
                            <p className="about-content">
                                Queue lightbulb moment… so we decided to launch
                                our own coffee company and develop specialty
                                coffee roasts to deliver directly to your door.
                                Coffee we can truly be proud to drink and worthy
                                of a coffee culture, that continues to enhance
                                one another’s connections.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="about-info">
                    <div className="container">
                        <div className="about-wrapper">
                            <div className="about-row">
                                <div className="about-col  grid-rows">
                                    <h2 className="about-title">OUR COFFEE</h2>
                                    <p className="about-content">
                                        Coffee, the center point of our
                                        connections… and why quality matters.
                                    </p>
                                    <p className="about-content">
                                        We have the strong belief in building
                                        long term connections with the very
                                        farms that grow the coffee we love to
                                        roast. Through tasting a range of
                                        coffees from each farm, we carefully
                                        selected our favorites to share with
                                        you. Responsibly sourced from exotic
                                        locations, roasted in small batches with
                                        love.
                                    </p>
                                </div>
                                <div className="about-col grid-rows">
                                    <img
                                        src={about1}
                                        alt="about-info-ok-but-first-coffee"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-info">
                    <div className="container">
                        <div className="about-wrapper">
                            <div className="about-row">
                                <div className="about-col">
                                    <img
                                        src={about2}
                                        alt="about-info-ok-but-first-coffee"
                                    />
                                </div>
                                <div className="about-col">
                                    <h2 className="about-title">
                                        JOIN OUR COMMUNITY
                                    </h2>
                                    <p className="about-content">
                                        OKBF is more than just quality coffee.
                                        We are a community of coffee lovers, who
                                        share experiences, create memories and
                                        long for the quality of life that starts
                                        in our coffee cup.
                                    </p>
                                    <p className="about-content">
                                        Be a part of our family and follow us on
                                        insta (@OKBFCoffee), sharing your
                                        memories with us, while drinking your
                                        “Ok, But First… Coffee.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-info">
                    <div className="container">
                        <div className="about-wrapper">
                            <div className="about-row">
                                <div className="about-col  grid-rows">
                                    <h2 className="about-title">
                                        KALDI OUR MASCOT
                                    </h2>
                                    <p className="about-content">
                                        As the popular legend goes, a goat
                                        herder from Kaffa (now Ethiopia) named
                                        Kaldi was herding his goats, when he
                                        noticed strange behavior from his herd.
                                        The goats, after eating bright red
                                        berries from a certain tree, began to
                                        dance around wildly and bleat loudly.
                                    </p>
                                    <p className="about-content">
                                        Kaldi reported his findings to the abbot
                                        of the local monastery, who made a drink
                                        with the berries and found that it kept
                                        him alert through the long hours of
                                        evening prayer. The abbot shared his
                                        discovery with the other monks at the
                                        monastery, and knowledge of the
                                        energizing berries began to spread.
                                    </p>
                                    <p className="about-content">
                                        As word moved east and coffee reached
                                        the Arabian Peninsula, it began a
                                        journey which would bring these beans
                                        across the globe. And there you have it,
                                        the story of coffee discovery and our
                                        mascot!
                                    </p>
                                </div>
                                <div className="about-col  grid-rows">
                                    <img
                                        src={about3}
                                        alt="about-info-ok-but-first-coffee"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default AboutUs;
