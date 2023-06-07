import { Navlink } from "components/nav/link";
import React from "react";
import s from "./NavSidebar.module.scss";

export const NavSidebar = ({ links, showMenu, close }) => {
    return (
        <>
            {showMenu && <div className={s.overlay} onClick={() => close()}></div>}
            <div className={showMenu ? `${s.container} ${s.show}` : s.container}>
                <div className={s.items}>
                    {links.map((l, i) => {
                        return (
                            <Navlink key={l._id} navRoute={l.navRoute} showTooltip={false}>
                                <l.icon />
                            </Navlink>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
