import "./ContactUs.scss";
import Breadcrumb from "../../Components/Breadcrumb";
import contactMail from "../../Assets/svg/contactMail.svg";
import contactLocation from "../../Assets/svg/contactLocation.svg";
import contactSupport from "../../Assets/svg/contactSupport.svg";

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Chức năng đang hoàn thiện");
    };

    return (
        <>
            <main className="contact-us">
                <section>
                    <Breadcrumb breadcrumb="Buy Freshly Roasted Coffee Beans Online Now | Contact Okbutfirst" />
                </section>
                <section className="contact-info">
                    <div className="container">
                        <div className="title-wrapper">
                            <h2 className="title">
                                BUY FRESHLY ROASTED COFFEE BEANS ONLINE NOW |
                                CONTACT OKBUTFIRST
                            </h2>
                        </div>
                        <div className="contact-box">
                            <div className="box-wrap">
                                <img src={contactMail} alt="" />
                                <p>Email Us</p>
                                <a href="mailto:phantronghau.dev@gmail.com">
                                    hello@okbutfirst.com
                                </a>
                            </div>
                            <div className="box-wrap">
                                <img src={contactLocation} alt="" />
                                <p>Fan of regular mail</p>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.google.com/maps/place/The+UPS+Store/@40.4525966,-74.2994107,18.7z/data=!4m8!1m2!3m1!2sThe+UPS+Store!3m4!1s0x89c3cbeef956117b:0x2ca236efc7334a60!8m2!3d40.452536!4d-74.2995466"
                                >
                                    1056 US Hwy 9 S, #220 Parlin, NJ 08859
                                </a>
                            </div>
                            <div className="box-wrap">
                                <img src={contactSupport} alt="" />
                                <p>leave us a message</p>
                                <a href="tel://732.927.1369">732.927.1369</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="get-in-touch">
                    <div className="container">
                        <div className="contact-row">
                            <div className="contact-col">
                                <h2 className="get-in-touch-title">
                                    get in touch
                                </h2>
                                <p className="get-in-touch-desc">
                                    Ok, but first… have feedback or questions?
                                    Complete the contact form below and let us
                                    know how we can help. <br /> We’re excited
                                    to hear from you!
                                </p>
                                <form
                                    acceptCharset="UTF-8"
                                    onSubmit={handleSubmit}
                                >
                                    <input
                                        type="hidden"
                                        name="utf8"
                                        value={"✓"}
                                    />
                                    <div className="form-row">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="E-mail"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            type="text"
                                            placeholder="Your Message"
                                            rows={5}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="theme-btn__black"
                                    >
                                        Submit Form
                                    </button>
                                </form>
                            </div>
                            <div className="contact-col">
                                <div className="map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1518.0122072491529!2d-74.2994107!3d40.4525966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3cbeef956117b%3A0x2ca236efc7334a60!2sThe%20UPS%20Store!5e0!3m2!1svi!2s!4v1667448650722!5m2!1svi!2s"
                                        width="100%"
                                        height="100%"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="123"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ContactUs;
