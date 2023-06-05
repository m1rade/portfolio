import { Navlink } from "components/nav/link";
import React from "react";
import s from "./NavScrollbar.module.scss";

export const NavScrollbar = props => {
    return (
        <div className={s.items}>
            {props.links.map((l, i) => {
                return (
                    <Navlink key={i} navRoute={l.navRoute} showTooltip={true}>
                        <l.icon />
                    </Navlink>
                );
            })}
        </div>
    );
};
