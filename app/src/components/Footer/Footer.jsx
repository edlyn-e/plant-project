import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.Footer}>
            {/* Policies and stuff */}
            <section className={styles.Footer__section}>
                <ul>
                    <li>The legal stuff</li>
                    <li>Terms and conditions</li>
                    <li>Privacy policy</li>
                </ul>

                <ul>
                    <li>About us</li>
                    <li>Our values</li>
                    <li>Inclusion and diversity</li>
                </ul>
            </section>

            {/* Customer Service Stuff */}
            <section className={styles.Footer__section}>
                <ul>
                    <li>Customer service</li>
                    <li>Contact us</li>
                    <li>Store locator</li>
                    <li>Returns policy</li>
                    <li>My account</li>
                    <li>Subscribe to our newsletter</li>
                </ul>
            </section>

            {/* Author's note */}
            {/* <section className={styles.Footer__section}>
                <ul>
                    <li>Developer's note</li>
                    <li>
                        This e-commerce website was built by edlyn-e. Check out
                        more on Github
                        <a href="https://github.com/edlyn-e"> here</a>.
                    </li>
                </ul>
            </section> */}

            {/* Other extra stuff */}
            <section className={styles.Footer__section}>
                <ul>
                    <li>Are you a member?</li>
                    <li>Get a 20% off discount when you join, it's free!</li>
                </ul>
            </section>

            <div>
                <p className={styles.Footer__footnote}>
                    This e-commerce website was built by edlyn-e. Check out more
                    on Github
                    <a href="https://github.com/edlyn-e"> here</a>. This website
                    was built for educational and study purposes. The clothing
                    content and prices displayed on this website originally
                    belongs to H&M Hennes & Mauritz AB.
                </p>
            </div>
        </div>
    );
};

export default Footer;
