import { navigation } from "common/routes";
import { NavScrollbar } from "components/nav/nav-scrollbar";
import { NavSidebar } from "components/nav/nav-sidebar";
import React from "react";
import { FaAddressCard, FaGraduationCap, FaGripVertical } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import s from "./Nav.module.scss";

const links = [
    { _id: "ui*(", navRoute: navigation.home, icon: HiHome },
    { _id: "fqewrt", navRoute: navigation.skills, icon: FaGraduationCap },
    { _id: "88fka1]r", navRoute: navigation.projects, icon: FaGripVertical },
    { _id: "[]ad", navRoute: navigation.contacts, icon: FaAddressCard },
];

export const Nav = () => {
    return (
        <div className={s.navbar}>
            <NavScrollbar links={links} />
            <NavSidebar links={links} />
        </div>
    );
};
