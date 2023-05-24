import React from "react";
import { Contacts, Footer, Header, Main, Projects, Skills } from "components";
import "./App.css";

export const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
        </>
    );
};
