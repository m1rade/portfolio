import React from "react";
import { Contacts, Main, Nav, Projects, Sidebar, Skills } from "components";
import "./App.css";
import { MovingBg } from "components/movingBg";

export const App = () => {
    return (
        <>
            <MovingBg />
            <Sidebar />
            <Nav />
            <main>
                <Main />
                <Skills />
                <Projects />
                <Contacts />
            </main>
        </>
    );
};
