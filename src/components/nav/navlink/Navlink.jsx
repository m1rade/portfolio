import { Tooltip } from "common/components";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-scroll";
import s from "./Navlink.module.scss";

export const Navlink = ({ navRoutes, children, ...respProps }) => {
    const [isVisible, setVisible] = useState(false);

    const handleOnHoverLink = () => {
        setVisible(!isVisible);
    };

    return (
        <Link
            className={s.navlink}
            activeClass={s.active}
            to={navRoutes}
            spy={true}
            smooth={true}
            offset={3}
            duration={700}
            {...respProps}
            onMouseEnter={handleOnHoverLink}
            onMouseLeave={handleOnHoverLink}>
            <Tooltip content={navRoutes} className={isVisible && s.show} />
            <IconContext.Provider value={{ className: s.icon }}>{children}</IconContext.Provider>
        </Link>
    );
};
