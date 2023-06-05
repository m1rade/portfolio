import { Navlink } from "components/nav/link";
import React, { useState } from "react";
import s from "./NavSidebar.module.scss";

export const NavSidebar = props => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className={s.container}>
            <div className={s.burgerButton} onClick={handleShowMenu}></div>
            <div className={showMenu ? `${s.items} ${s.showItems}` : s.items}>
                {props.links.map((l, i) => {
                    return (
                        <Navlink key={l._id} navRoute={l.navRoute} showTooltip={false}>
                            <l.icon />
                        </Navlink>
                    );
                })}
            </div>
        </div>
    );
};
