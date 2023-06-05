import { Tooltip } from "common/components";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-scroll";
import s from "./Navlink.module.scss";

export const Navlink = ({ navRoute, children, showTooltip, ...restProps }) => {
    const [isVisible, setVisible] = useState(false);

    const handleOnHoverLink = () => {
        setVisible(!isVisible);
    };

    return (
        <Link
            className={s.item}
            activeClass={s.active}
            to={navRoute}
            spy={true}
            smooth={true}
            offset={3}
            duration={700}
            {...restProps}
            onMouseEnter={handleOnHoverLink}
            onMouseLeave={handleOnHoverLink}>
            <IconContext.Provider value={{ className: s.icon }}>{children}</IconContext.Provider>
            {showTooltip ? <Tooltip content={navRoute} className={isVisible && s.show} /> : <span className={s.linkName}>{navRoute}</span>}
        </Link>
    );
};
