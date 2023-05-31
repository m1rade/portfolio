import { navigation } from "common/routes";
import React, { useState } from "react";
import { FaAddressCard, FaGraduationCap, FaGripVertical } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import s from "./Nav.module.scss";
import { IconContext } from "react-icons";

export const Nav = () => {
    const [isBubbleShown, setIsBubbleShown] = useState(false);

    const handleOnHoverLink = e => {
        setIsBubbleShown(true);
    };

    const handleOnMouseLeave = () => {
        setIsBubbleShown(false);
    }

    return (
        <div className={s.navbar}>
            <a href={"#" + navigation.home} onMouseEnter={handleOnHoverLink} onMouseLeave={handleOnMouseLeave}>
                {isBubbleShown && <span>{navigation.home}</span>}
                <IconContext.Provider value={{ className: s.icon }}>
                    <HiHome />
                </IconContext.Provider>
            </a>
            <a href={"#" + navigation.skills} onMouseEnter={handleOnHoverLink} onMouseLeave={handleOnMouseLeave}>
                {isBubbleShown && <span>{navigation.skills}</span>}
                <IconContext.Provider value={{ className: s.icon }}>
                    <FaGraduationCap />
                </IconContext.Provider>
            </a>
            <a href={"#" + navigation.projects} onMouseEnter={handleOnHoverLink} onMouseLeave={handleOnMouseLeave}>
                {isBubbleShown && <span>{navigation.projects}</span>}
                <IconContext.Provider value={{ className: s.icon }}>
                    <FaGripVertical />
                </IconContext.Provider>
            </a>
            <a href={"#" + navigation.contacts} onMouseEnter={handleOnHoverLink} onMouseLeave={handleOnMouseLeave}>
                {isBubbleShown && <span>{navigation.contacts}</span>}
                <IconContext.Provider value={{ className: s.icon }}>
                    <FaAddressCard />
                </IconContext.Provider>
            </a>
        </div>
    );
};
