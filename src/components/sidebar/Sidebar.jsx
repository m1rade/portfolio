import { Button } from "common/components";
import React from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";
import photo from "../../assets/image/me.jpg";
import s from "./Sidebar.module.scss";
import { navigation } from "common/routes";

export const Sidebar = () => {
    return (
        <div className={s.container}>
            <div className={s.personalPhoto}>
                <img src={photo} alt="me" />
            </div>
            <div className={s.info}>
                <h2>Golysheva Laura</h2>
                <h2>Based in Saint-Petersburg</h2>
                <p className={s.copyright}>© 2022, All Rights Reserved</p>
            </div>
            <div className={s.social}>
                <ul className={s.links}>
                    <li>Github</li>
                    <li>Instagram</li>
                    <li>Spotify</li>
                    <li>Codewars</li>
                </ul>
            </div>
            <Button className={s.buttonWrapper} icon={<HiOutlineEnvelope />}>
                <a className={s.buttonLink} href={"#" + navigation.contacts}>Hire me!</a>
            </Button>
        </div>
    );
};
