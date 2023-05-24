import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

export const Nav = () => {
    return (
        <div className={s.nav}>
            <NavLink to="#">Home</NavLink>
            <NavLink to="#">Skills</NavLink>
            <NavLink to="#">Projects</NavLink>
            <NavLink to="#">Contacts</NavLink>
        </div>
    );
};
