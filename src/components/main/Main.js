import { Subtitle } from "common/components";
import sContainer from "common/styles/container.module.scss";
import sSection from "common/styles/section.module.scss";
import React from "react";
import { HiHome } from "react-icons/hi";
import s from "./Main.module.scss";

export const Main = () => {
    return (
        <section className={sSection.sectionBlock}>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
                <Subtitle subtitle="Introduce" icon={<HiHome />} />
                <div className={s.innerContent}>
                    <div className={s.text}>
                        <h1>
                            Say Hi from <span> Golysheva Laura,</span> a Frontend Web Developer
                        </h1>
                        <p>I code beautifully simple things and i love what i do. Just simple like that!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
