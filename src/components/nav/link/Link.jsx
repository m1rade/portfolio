import { Tooltip } from "common/components";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import s from "./Link.module.scss";

export const Link = ({ navRoutes, children, ...respProps }) => {
    const [isVisible, setVisible] = useState(false);

    const handleOnHoverLink = () => {
        setVisible(!isVisible);
    };

    return (
        <a
            href={"#" + navRoutes}
            className={s.navlink}
            {...respProps}
            onMouseEnter={handleOnHoverLink}
            onMouseLeave={handleOnHoverLink}>
            <Tooltip content={navRoutes} className={isVisible && s.show} />
            <IconContext.Provider value={{ className: s.icon }}>{children}</IconContext.Provider>
        </a>
    );
};
