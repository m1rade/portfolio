import React from "react";
import { Contacts, Main, Nav, Projects, Skills } from "components";
import "./App.css";

export const App = () => {
    return (
        <>
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
