import { Button } from "common/components";
import { navigation } from "common/routes";
import React from "react";
import { IconContext } from "react-icons";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { SiCodewars, SiSpotify } from "react-icons/si";
import { Link } from "react-scroll";
import photo from "../../assets/image/me.jpg";
import s from "./Sidebar.module.scss";

export const Sidebar = () => {
    const styledIcon = { className: s.icon, size: "1.2em" };

    return (
        <div className={s.container}>
            <div className={s.personalPhoto}>
                <img src={photo} alt="me" />
            </div>
            <div className={s.info}>
                <h2>Golysheva Laura</h2>
                <h2>Based in Saint-Petersburg</h2>
                <p className={s.copyright}>© 2023, All Rights Reserved</p>
            </div>
            <div className={s.social}>
                <ul className={s.links}>
                    <li>
                        <a href="https://github.com/m1rade" target="_blank" rel="noreferrer">
                            <IconContext.Provider value={styledIcon}>
                                <AiFillGithub />
                            </IconContext.Provider>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/arctic_cola" target="_blank" rel="noreferrer">
                            <IconContext.Provider value={styledIcon}>
                                <AiOutlineInstagram />
                            </IconContext.Provider>
                        </a>
                    </li>
                    <li>
                        <a href="https://open.spotify.com/user/arctic_cola" target="_blank" rel="noreferrer">
                            <IconContext.Provider value={styledIcon}>
                                <SiSpotify />
                            </IconContext.Provider>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.codewars.com/users/m1rade" target="_blank" rel="noreferrer">
                            <IconContext.Provider value={styledIcon}>
                                <SiCodewars />
                            </IconContext.Provider>
                        </a>
                    </li>
                </ul>
            </div>
            <Link className={s.buttonLink} to={navigation.contacts} spy={true} smooth={true} offset={4} duration={700}>
                <Button className={s.buttonWrapper} icon={<HiOutlineEnvelope />}>
                    Hire me!
                </Button>
            </Link>
        </div>
    );
};
