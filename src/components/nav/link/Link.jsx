import { Tooltip } from "common/components";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import s from "./Link.module.scss";

export const Link = ({ navRoutes, children, ...respProps }) => {
    const [isVisible, setVisible] = useState(false);

    const handleOnHoverLink = e => {
        setVisible(true);
    };

    const handleOnMouseLeave = e => {
        setVisible(false);
    };
    return (
        <a href={"#" + navRoutes} {...respProps} onMouseEnter={handleOnHoverLink} onMouseLeave={handleOnMouseLeave}>
            {isVisible && <Tooltip content={navRoutes} />}
            <IconContext.Provider value={{ className: s.icon }}>{children}</IconContext.Provider>
        </a>
    );
};
