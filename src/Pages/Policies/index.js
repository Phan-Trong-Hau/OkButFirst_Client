import { useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb";
import "./Policies.scss";

const Policies = ({title}) => {
    const [navActive, setNavActive] = useState([
        true,
        false,
        false,
        false,
        false,
    ]);

    const handleOnClickActive = (e) => {
        const value = e.target.value;
        setNavActive((prev) => {
            return prev.map((e, i) => {
                if (e) e = false;
                if (i === value) e = true;
                return e;
            });
        });
    };

    return (
        <>
            <main className="policies">
                <section>
                    <Breadcrumb breadcrumb={title} />
                </section>
                <section className="policies-wrapper">
                    <div className="container">
                        <div className="policies-title">
                            <h1>{title}</h1>
                        </div>
                        <div className="policies-card">
                            <ul className="nav-tabs">
                                <li
                                    className={
                                        navActive[0] ? "tab active" : "tab"
                                    }
                                    value={0}
                                    onClick={handleOnClickActive}
                                >
                                    Shipping
                                </li>
                                <li
                                    className={
                                        navActive[1] ? "tab active" : "tab"
                                    }
                                    value={1}
                                    onClick={handleOnClickActive}
                                >
                                    Returns
                                </li>
                                <li
                                    value={2}
                                    className={
                                        navActive[2] ? "tab active" : "tab"
                                    }
                                    onClick={handleOnClickActive}
                                >
                                    Orders
                                </li>
                                <li
                                    className={
                                        navActive[3] ? "tab active" : "tab"
                                    }
                                    value={3}
                                    onClick={handleOnClickActive}
                                >
                                    Privacy
                                </li>
                                <li
                                    className={
                                        navActive[4] ? "tab active" : "tab"
                                    }
                                    value={4}
                                    onClick={handleOnClickActive}
                                >
                                    Terms
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                    className={
                                        navActive[0]
                                            ? "tab-panes active"
                                            : "tab-panes"
                                    }
                                >
                                    <h2>
                                        <strong>Shipping Policy</strong>
                                    </h2>

                                    <h3>
                                        <em>
                                            <strong>Shipping Processing</strong>
                                        </em>
                                    </h3>
                                    <p>
                                        All orders will be processed and shipped
                                        within 24-48 hours after checkout.
                                        Orders placed over the weekend or over a
                                        holiday, will ship the following
                                        business day. (Please note, we are
                                        located in the Eastern time zone).&nbsp;
                                    </p>
                                    <h3>
                                        <em>
                                            <strong>Free Shipping</strong>
                                        </em>
                                    </h3>
                                    <p>
                                        All orders over $40 will ship free, with
                                        one of our standard shipping options.
                                        (e.g., USPS First Class or USPS Priority
                                        for orders over 16 ounces). In some
                                        cases, we will ship via another carrier,
                                        such as UPS or FedEx depending on the
                                        lowest rate available.
                                    </p>
                                    <h3>
                                        <em>
                                            <strong>
                                                Expedited Shipping Options
                                            </strong>
                                        </em>
                                    </h3>
                                    <p>
                                        There will be multiple options for
                                        expedited shipping available at
                                        checkout. We ship USPS, UPS, and FedEx.
                                        Please note, all expedited shipping
                                        rates will incur an additional shipping
                                        cost, and are based on destination,
                                        order weight and shipping service
                                        chosen. (Please note, as we’re located
                                        in the Eastern Time Zone, all expedited
                                        orders placed after 2pm, will ship the
                                        next business day.)
                                    </p>
                                    <h3>
                                        <strong>
                                            <i>COVID</i>
                                        </strong>
                                    </h3>
                                    <p>
                                        Currently, all national carriers are
                                        experiencing delays associated with the
                                        ongoing impacts of COVID-19. We
                                        apologize in advance and ask for your
                                        patience as we navigate these impacts to
                                        supply chain.
                                    </p>
                                    <h3>
                                        <strong>
                                            <em>
                                                Holiday Shipping/Severe Weather
                                            </em>
                                        </strong>
                                    </h3>
                                    <p>
                                        Please expect longer shipping times and
                                        possible delays, during peak seasonal
                                        shipping months or in cases of severe
                                        weather. As always, our team will work
                                        diligently to ship all orders as soon as
                                        possible.
                                    </p>
                                    <p>
                                        Still have questions about your order,
                                        please email us at hello@okbutfirst.com
                                        so we can review and help resolve any
                                        shipping issues with your order.
                                    </p>
                                </div>
                                <div
                                    className={
                                        navActive[1]
                                            ? "tab-panes active"
                                            : "tab-panes"
                                    }
                                ></div>
                                <div
                                    className={
                                        navActive[2]
                                            ? "tab-panes active"
                                            : "tab-panes"
                                    }
                                ></div>
                                <div
                                    className={
                                        navActive[3]
                                            ? "tab-panes active"
                                            : "tab-panes"
                                    }
                                >
                                    <meta charSet="UTF-8" />
                                    <p>
                                        This Privacy Policy describes how
                                        okbutfirst.com (the “Site” or “we”)
                                        collects, uses, and discloses your
                                        Personal Information when you visit or
                                        make a purchase from the Site.
                                    </p>
                                    <h2>Collecting Personal Information</h2>
                                    <p>
                                        When you visit the Site, we collect
                                        certain information about your device,
                                        your interaction with the Site, and
                                        information necessary to process your
                                        purchases. We may also collect
                                        additional information if you contact us
                                        for customer support. In this Privacy
                                        Policy, we refer to any information that
                                        can uniquely identify an individual
                                        (including the information below) as
                                        “Personal Information”. See the list
                                        below for more information about what
                                        Personal Information we collect and why.
                                    </p>
                                    <p>
                                        <u>Device information</u>
                                    </p>
                                    <ul>
                                        <li>
                                            <strong>
                                                Examples of Personal Information
                                                collected:
                                            </strong>{" "}
                                            version of web browser, IP address,
                                            time zone, cookie information, what
                                            sites or products you view, search
                                            terms, and how you interact with the
                                            Site.
                                        </li>
                                        <li>
                                            <strong>
                                                Purpose of collection:
                                            </strong>{" "}
                                            to load the Site accurately for you,
                                            and to perform analytics on Site
                                            usage to optimize our Site.
                                        </li>
                                        <li>
                                            <strong>
                                                Source of collection:
                                            </strong>{" "}
                                            Collected automatically when you
                                            access our Site using cookies, log
                                            files, web beacons, tags, or
                                            pixels.&nbsp;
                                        </li>
                                        <li>
                                            <strong>
                                                Disclosure for a business
                                                purpose:
                                            </strong>{" "}
                                            shared with our processor Shopify.
                                        </li>
                                    </ul>
                                    <p>
                                        <u>Order information</u>
                                    </p>
                                    <ul>
                                        <li>
                                            <strong>
                                                Examples of Personal Information
                                                collected:
                                            </strong>{" "}
                                            name, billing address, shipping
                                            address, payment information
                                            (including credit card numbers),
                                            email address, and phone number.
                                        </li>
                                        <li>
                                            <strong>
                                                Purpose of collection:
                                            </strong>{" "}
                                            to provide products or services to
                                            you to fulfill our contract, to
                                            process your payment information,
                                            arrange for shipping, and provide
                                            you with invoices and/or order
                                            confirmations, communicate with you,
                                            screen our orders for potential risk
                                            or fraud, and when in line with the
                                            preferences you have shared with us,
                                            provide you with information or
                                            advertising relating to our products
                                            or services.
                                        </li>
                                        <li>
                                            <strong>
                                                Source of collection:
                                            </strong>{" "}
                                            collected from you.
                                        </li>
                                        <li>
                                            <strong>
                                                Disclosure for a business
                                                purpose:
                                            </strong>{" "}
                                            shared with our processor Shopify,
                                            and fulfillment app ShipStation.
                                        </li>
                                    </ul>
                                    <p>
                                        <u>Customer support information</u>
                                    </p>
                                    <ul>
                                        <li>
                                            <strong>
                                                Examples of Personal Information
                                                collected:
                                            </strong>
                                            &nbsp;<i>as indicated above.</i>
                                        </li>
                                        <li>
                                            <strong>
                                                Purpose of collection:
                                            </strong>{" "}
                                            to provide customer support.
                                        </li>
                                        <li>
                                            <strong>
                                                Source of collection:
                                            </strong>{" "}
                                            collected from you.
                                        </li>
                                        <li>
                                            <strong>
                                                Disclosure for a business
                                                purpose:
                                            </strong>
                                            &nbsp;
                                        </li>
                                    </ul>
                                    <p>&nbsp;</p>
                                    <h2>Minors</h2>
                                    <p>
                                        The Site is not intended for individuals
                                        under the age of <i>18</i>. We do not
                                        intentionally collect Personal
                                        Information from children. If you are
                                        the parent or guardian and believe your
                                        child has provided us with Personal
                                        Information, please contact us at the
                                        address below to request deletion.
                                    </p>
                                    <h2>Sharing Personal Information</h2>
                                    <p>
                                        We share your Personal Information with
                                        service providers to help us provide our
                                        services and fulfill our contracts with
                                        you, as described above. For example:
                                    </p>
                                    <ul>
                                        <li>
                                            We use Shopify to power our online
                                            store. You can read more about how
                                            Shopify uses your Personal
                                            Information here:{" "}
                                            <a
                                                target="_blank"
                                                data-sanitized-data-mce-href="https://www.shopify.com/legal/privacy"
                                                href="https://www.shopify.com/legal/privacy"
                                                data-sanitized-target="_blank"
                                                rel="noopener noreferrer"
                                                aria-describedby="a11y-external-message"
                                            >
                                                https://www.shopify.com/legal/privacy
                                            </a>
                                            .
                                        </li>
                                        <li>
                                            We may share your Personal
                                            Information to comply with
                                            applicable laws and regulations, to
                                            respond to a subpoena, search
                                            warrant or other lawful request for
                                            information we receive, or to
                                            otherwise protect our rights.
                                        </li>
                                        <li>
                                            We use Automizely App for promotion
                                            marketing&nbsp;You can read more
                                            about how Automizely&nbsp;uses your
                                            Personal Information here:
                                            <i>
                                                <span data-sanitized-data-mce-fragment="1">
                                                    {" "}
                                                </span>
                                            </i>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                data-sanitized-data-mce-href="https://www.automizely.com/legal/privacy"
                                                href="https://www.automizely.com/legal/privacy"
                                                data-sanitized-target="_blank"
                                                aria-describedby="a11y-external-message"
                                            >
                                                https://www.automizely.com/legal/privacy
                                            </a>
                                            &nbsp;
                                        </li>
                                    </ul>
                                    <h2>Behavioural Advertising</h2>
                                    <p>
                                        As described above, we use your Personal
                                        Information to provide you with targeted
                                        advertisements or marketing
                                        communications we believe may be of
                                        interest to you. For example:
                                    </p>
                                    <ul>
                                        <li>
                                            We use Google Analytics to help us
                                            understand how our customers use the
                                            Site. You can read more about how
                                            Google uses your Personal
                                            Information here:{" "}
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                data-sanitized-data-mce-href="https://policies.google.com/privacy?hl=en"
                                                href="https://policies.google.com/privacy?hl=en"
                                                data-sanitized-target="_blank"
                                                aria-describedby="a11y-external-message"
                                            >
                                                https://policies.google.com/privacy?hl=en
                                            </a>
                                            .You can also opt-out of Google
                                            Analytics here:{" "}
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                data-sanitized-data-mce-href="https://tools.google.com/dlpage/gaoptout"
                                                href="https://tools.google.com/dlpage/gaoptout"
                                                data-sanitized-target="_blank"
                                                aria-describedby="a11y-external-message"
                                            >
                                                https://tools.google.com/dlpage/gaoptout
                                            </a>
                                            .
                                        </li>
                                        <li>
                                            We share information about your use
                                            of the Site, your purchases, and
                                            your interaction with our ads on
                                            other websites with our advertising
                                            partners. We collect and share some
                                            of this information directly with
                                            our advertising partners, and in
                                            some cases through the use of
                                            cookies or other similar
                                            technologies (which you may consent
                                            to, depending on your location).
                                        </li>
                                    </ul>
                                    <p>
                                        For more information about how targeted
                                        advertising works, you can visit the
                                        Network Advertising Initiative’s (“NAI”)
                                        educational page at{" "}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-sanitized-data-mce-href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
                                            href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
                                            data-sanitized-target="_blank"
                                            aria-describedby="a11y-external-message"
                                        >
                                            http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
                                        </a>
                                        .
                                    </p>
                                    <p>
                                        You can opt out of targeted advertising
                                        by:
                                    </p>
                                    <p>
                                        <i>
                                            [INCLUDE OPT-OUT LINKS FROM
                                            WHICHEVER SERVICES BEING USED.
                                            COMMON LINKS INCLUDE:
                                        </i>
                                    </p>
                                    <ul>
                                        <li>
                                            <i>INSTAGRAM&nbsp;- </i>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                data-sanitized-data-mce-href="help.instagram.com/615366948510230/?helpref=uf_share"
                                                href="help.instagram.com/615366948510230/?helpref=uf_share"
                                                data-sanitized-target="_blank"
                                            >
                                                help.instagram.com/615366948510230/?helpref=uf_share
                                            </a>
                                        </li>
                                        <li>
                                            <i>GOOGLE - </i>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                data-sanitized-data-mce-href="https://www.google.com/settings/ads/anonymous"
                                                href="https://www.google.com/settings/ads/anonymous"
                                                data-sanitized-target="_blank"
                                                aria-describedby="a11y-external-message"
                                            >
                                                https://www.google.com/settings/ads/anonymous
                                            </a>
                                        </li>
                                    </ul>
                                    <p>
                                        Additionally, you can opt out of some of
                                        these services by visiting the Digital
                                        Advertising Alliance’s opt-out portal
                                        at:{" "}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-sanitized-data-mce-href="http://optout.aboutads.info/"
                                            href="http://optout.aboutads.info/"
                                            data-sanitized-target="_blank"
                                            aria-describedby="a11y-external-message"
                                        >
                                            http://optout.aboutads.info/
                                        </a>
                                        .
                                    </p>
                                    <h2>Using Personal Information</h2>
                                    <p>
                                        We use your personal Information to
                                        provide our services to you, which
                                        includes: offering products for sale,
                                        processing payments, shipping and
                                        fulfillment of your order, and keeping
                                        you up to date on new products,
                                        services, and offers.
                                    </p>
                                    <p>
                                        <i>&nbsp;</i>
                                    </p>
                                    <h2>Lawful basis</h2>
                                    <p>
                                        Pursuant to the General Data Protection
                                        Regulation (“GDPR”), if you are a
                                        resident of the European Economic Area
                                        (“EEA”), we process your personal
                                        information under the following lawful
                                        bases:
                                    </p>
                                    <ul>
                                        <li>Your consent;</li>
                                        <li>
                                            The performance of the contract
                                            between you and the Site;
                                        </li>
                                        <li>
                                            Compliance with our legal
                                            obligations;
                                        </li>
                                        <li>
                                            To protect your vital interests;
                                        </li>
                                        <li>
                                            To perform a task carried out in the
                                            public interest;
                                        </li>
                                        <li>
                                            For our legitimate interests, which
                                            do not override your fundamental
                                            rights and freedoms.
                                        </li>
                                    </ul>
                                    <h2>Retention</h2>
                                    <p>
                                        When you place an order through the
                                        Site, we will retain your Personal
                                        Information for our records unless and
                                        until you ask us to erase this
                                        information. For more information on
                                        your right of erasure, please see the
                                        ‘Your rights’ section below.
                                    </p>
                                    <h2>Automatic decision-making</h2>
                                    <p>
                                        If you are a resident of the EEA, you
                                        have the right to object to processing
                                        based solely on automated
                                        decision-making (which includes
                                        profiling), when that decision-making
                                        has a legal effect on you or otherwise
                                        significantly affects you.
                                    </p>
                                    <p>
                                        We <i>[DO/DO NOT]</i> engage in fully
                                        automated decision-making that has a
                                        legal or otherwise significant effect
                                        using customer data.
                                    </p>
                                    <p>
                                        Our processor Shopify uses limited
                                        automated decision-making to prevent
                                        fraud that does not have a legal or
                                        otherwise significant effect on you.
                                    </p>
                                    <p>
                                        Services that include elements of
                                        automated decision-making include:
                                    </p>
                                    <ul>
                                        <li>
                                            Temporary denylist of IP addresses
                                            associated with repeated failed
                                            transactions. This denylist persists
                                            for a small number of hours.
                                        </li>
                                        <li>
                                            Temporary denylist of credit cards
                                            associated with denylisted IP
                                            addresses. This denylist persists
                                            for a small number of days.
                                        </li>
                                    </ul>
                                    <ul></ul>
                                    <h2>Your rights</h2>
                                    <h2>CCPA</h2>
                                    <p>
                                        If you are a resident of California, you
                                        have the right to access the Personal
                                        Information we hold about you (also
                                        known as the ‘Right to Know’), to port
                                        it to a new service, and to ask that
                                        your Personal Information be corrected,
                                        updated, or erased. If you would like to
                                        exercise these rights, please contact us
                                        through the contact information below.
                                    </p>
                                    <p>
                                        If you would like to designate an
                                        authorized agent to submit these
                                        requests on your behalf, please contact
                                        us at the address below.
                                    </p>
                                    <h2>Cookies</h2>
                                    <p>
                                        A cookie is a small amount of
                                        information that’s downloaded to your
                                        computer or device when you visit our
                                        Site. We use a number of different
                                        cookies, including functional,
                                        performance, advertising, and social
                                        media or content cookies. Cookies make
                                        your browsing experience better by
                                        allowing the website to remember your
                                        actions and preferences (such as login
                                        and region selection). This means you
                                        don’t have to re-enter this information
                                        each time you return to the site or
                                        browse from one page to another. Cookies
                                        also provide information on how people
                                        use the website, for instance whether
                                        it’s their first time visiting or if
                                        they are a frequent visitor.
                                    </p>
                                    <p>
                                        We use the following cookies to optimize
                                        your experience on our Site and to
                                        provide our services.
                                    </p>
                                    <h2>
                                        Cookies Necessary for the Functioning of
                                        the Store
                                    </h2>
                                    <div className="scrollable-wrapper">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <strong>Name</strong>
                                                    </th>
                                                    <th>
                                                        <strong>
                                                            Function
                                                        </strong>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <i>_ab</i>
                                                    </td>
                                                    <td>
                                                        Used in connection with
                                                        access to admin.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i>
                                                            _secure_session_id
                                                        </i>
                                                    </td>
                                                    <td>
                                                        Used in connection with
                                                        navigation through a
                                                        storefront.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i>cart</i>
                                                    </td>
                                                    <td>
                                                        Used in connection with
                                                        shopping cart.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i>cart_sig</i>
                                                    </td>
                                                    <td>
                                                        Used in connection with
                                                        checkout.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i>cart_ts</i>
                                                    </td>
                                                    <td>
                                                        Used in connection with
                                                        checkout.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i>checkout_token</i>
                                                    </td>
                                                    <td>
                                                        Used in connection with
                                                        checkout.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i>secret</i>
                                                    </td>
                                                    <td>
                                                        Used in connection with
                                                        checkout.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i>
                                                            secure_customer_sig
                                                        </i>
                                                    </td>
                                                    <td>
                                                        Used in connection with
                                                        customer login.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i>storefront_digest</i>
                                                    </td>
                                                    <td>
                                                        Used in connection with
                                                        customer login.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i>_shopify_u</i>
                                                    </td>
                                                    <td>
                                                        Used to facilitate
                                                        updating customer
                                                        account information.
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <h2>Reporting and Analytics</h2>
                                    <div className="scrollable-wrapper">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <strong>Name</strong>
                                                    </th>
                                                    <th>
                                                        <strong>
                                                            Function
                                                        </strong>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <i>_tracking_consent</i>
                                                    </td>
                                                    <td>
                                                        Tracking preferences.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i>_landing_page</i>
                                                    </td>
                                                    <td>Track landing pages</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i>_orig_referrer</i>
                                                    </td>
                                                    <td>Track landing pages</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i>_s</i>
                                                    </td>
                                                    <td>Shopify analytics.</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i>_shopify_s</i>
                                                    </td>
                                                    <td>Shopify analytics.</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i>_shopify_sa_p</i>
                                                    </td>
                                                    <td>
                                                        Shopify analytics
                                                        relating to marketing
                                                        &amp; referrals.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i>_shopify_sa_t</i>
                                                    </td>
                                                    <td>
                                                        Shopify analytics
                                                        relating to marketing
                                                        &amp; referrals.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i>_shopify_y</i>
                                                    </td>
                                                    <td>Shopify analytics.</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i>_y</i>
                                                    </td>
                                                    <td>Shopify analytics.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p>
                                        <i>
                                            [INSERT OTHER COOKIES OR TRACKING
                                            TECHNOLOGIES THAT YOU USE]
                                        </i>
                                    </p>
                                    <p>
                                        The length of time that a cookie remains
                                        on your computer or mobile device
                                        depends on whether it is a “persistent”
                                        or “session” cookie. Session cookies
                                        last until you stop browsing and
                                        persistent cookies last until they
                                        expire or are deleted. Most of the
                                        cookies we use are persistent and will
                                        expire between 30 minutes and two years
                                        from the date they are downloaded to
                                        your device.
                                    </p>
                                    <p>
                                        You can control and manage cookies in
                                        various ways. Please keep in mind that
                                        removing or blocking cookies can
                                        negatively impact your user experience
                                        and parts of our website may no longer
                                        be fully accessible.
                                    </p>
                                    <p>
                                        Most browsers automatically accept
                                        cookies, but you can choose whether or
                                        not to accept cookies through your
                                        browser controls, often found in your
                                        browser’s “Tools” or “Preferences” menu.
                                        For more information on how to modify
                                        your browser settings or how to block,
                                        manage or filter cookies can be found in
                                        your browser’s help file or through such
                                        sites as{" "}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-sanitized-target="_blank"
                                            href="www.allaboutcookies.org"
                                            data-sanitized-data-mce-href="www.allaboutcookies.org"
                                        >
                                            www.allaboutcookies.org
                                        </a>
                                        .
                                    </p>
                                    <p>
                                        Additionally, please note that blocking
                                        cookies may not completely prevent how
                                        we share information with third parties
                                        such as our advertising partners. To
                                        exercise your rights or opt-out of
                                        certain uses of your information by
                                        these parties, please follow the
                                        instructions in the “Behavioural
                                        Advertising” section above.
                                    </p>
                                    <h2>Do Not Track</h2>
                                    <p>
                                        Please note that because there is no
                                        consistent industry understanding of how
                                        to respond to “Do Not Track” signals, we
                                        do not alter our data collection and
                                        usage practices when we detect such a
                                        signal from your browser.
                                    </p>
                                    <h2>Changes</h2>
                                    <p>
                                        We may update this Privacy Policy from
                                        time to time in order to reflect, for
                                        example, changes to our practices or for
                                        other operational, legal, or regulatory
                                        reasons.
                                    </p>
                                    <h2>Contact</h2>
                                    <p>
                                        For more information about our privacy
                                        practices, if you have questions, or if
                                        you would like to make a complaint,
                                        please contact us by e-mail at
                                        hello@okbutfirst.com&nbsp;or by mail
                                        using the details provided below:
                                    </p>
                                    <p>
                                        1056 US HWY 9 South, Parlin NJ 08859,
                                        United States
                                    </p>
                                    <p>
                                        <i>Last updated: 10/27/2021</i>
                                        <span></span>
                                    </p>
                                    <p>
                                        If you are not satisfied with our
                                        response to your complaint, you have the
                                        right to lodge your complaint with the
                                        relevant data protection authority. You
                                        can contact your local data protection
                                        authority, or our supervisory authority
                                        here:&nbsp;
                                        <a
                                            href="https://www.njconsumeraffairs.gov/Pages/Consumer-Complaints.aspx"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-describedby="a11y-new-window-external-message"
                                        >
                                            https://www.njconsumeraffairs.gov/Pages/Consumer-Complaints.aspx
                                        </a>
                                    </p>
                                    <ul></ul>
                                </div>
                                <div
                                    className={
                                        navActive[4]
                                            ? "tab-panes active"
                                            : "tab-panes"
                                    }
                                ></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Policies;
