import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
    return (
        <footer class={s.footerContainer}>
            <div class={s.row}>
                <h3 className={s.footerLogo}>Footer Logo</h3>
                <ul className={s.links}>
                    <li>Github</li>
                    <li>Linkedin</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
                <p className={s.copyright}>© 2022, All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
