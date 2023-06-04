import { navigation } from "common/routes";
import { Navlink } from "components/nav/navlink";
import React from "react";
import { FaAddressCard, FaGraduationCap, FaGripVertical } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import s from "./Nav.module.scss";

const links = [
    { navlink: navigation.home, icon: HiHome },
    { navlink: navigation.skills, icon: FaGraduationCap },
    { navlink: navigation.projects, icon: FaGripVertical },
    { navlink: navigation.contacts, icon: FaAddressCard },
];

export const Nav = () => {
    return (
        <div className={s.navbar}>
            {links.map((l, i) => {
                return (
                    <Navlink key={i} navRoutes={l.navlink}>
                        <l.icon />
                    </Navlink>
                );
            })}
        </div>
    );
};
