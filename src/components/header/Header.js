import React from "react";
import { Nav } from "components";
import s from "./Header.module.css";

export const Header = () => {
    return (
        <header className={s.header}>
            <Nav />
        </header>
    );
};
