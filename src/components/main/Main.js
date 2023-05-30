import sContainer from "common/styles/container.module.scss";
import sSection from "common/styles/section.module.scss";
import React from "react";
import s from "./Main.module.scss";

export const Main = () => {
    return (
        <section className={sSection.sectionBlock}>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
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
