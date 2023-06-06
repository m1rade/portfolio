import { Navlink } from "components/nav/link";
import React from "react";
import s from "./NavSidebar.module.scss";

export const NavSidebar = props => {
    return (
        <div className={s.container}>
            <div className={s.items}>
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
