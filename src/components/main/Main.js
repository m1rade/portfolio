import sContainer from "common/styles/container.module.css";
import React from "react";
import s from "./Main.module.css";

export const Main = () => {
    return (
        <section className={s.mainSection}>
            <div className={`${sContainer.container}`}>
                <div className={s.text}>
                    <span>Hi There!</span>
                    <h1>I'm Golysheva Laura</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </section>
    );
};