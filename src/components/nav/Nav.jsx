import { navigation } from "common/routes";
import { Link } from "components/nav/link";
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
                    <Link key={i} navRoutes={l.navlink}>
                        <l.icon />
                    </Link>
                );
            })}
        </div>
    );
};
