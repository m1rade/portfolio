import { Button, Subtitle } from "common/components";
import React from "react";
import { HiHome } from "react-icons/hi";
import s from "./Main.module.scss";
import { navigation } from "common/routes";

export const Main = () => {
    return (
        <section className={s.sectionBlock} id={navigation.home}>
            <div className={s.container}>
                <Subtitle subtitle="Introduce" icon={<HiHome />} />
                <div className={s.innerContent}>
                    <div className={s.text}>
                        <h1>
                            Say Hi from <span>Golysheva Laura,</span> a Frontend Web Developer
                        </h1>
                        <p>I code beautifully simple things and I love what I do. Just simple like that!</p>
                    </div>
                </div>
                <div className={s.buttonWrapper}>
                    <Button className={s.buttonClass}>Download CV</Button>
                </div>
            </div>
        </section>
    );
};
