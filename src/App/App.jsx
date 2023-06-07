import React from "react";
import { Contacts, Main, Nav, Projects, Sidebar, Skills } from "components";
import "./App.css";

export const App = () => {
    return (
        <>
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
