import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

const Nav = () => {
    return (
        <div className={s.nav}>
            <NavLink>Home</NavLink>
            <NavLink>Skills</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Contacts</NavLink>
        </div>
    );
};

export default Nav;
