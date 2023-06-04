import { Button, Subtitle } from "common/components";
import { navigation } from "common/routes";
import React from "react";
import { HiHome } from "react-icons/hi";
import { Fade } from "react-reveal";
import s from "./Main.module.scss";

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
                        <Fade bottom duration={3000}>
                            <p>I code beautifully simple things and I love what I do. Just simple like that!</p>
                        </Fade>
                    </div>
                </div>
                <div className={s.buttonWrapper}>
                    <Fade bottom duration={3000}>
                        <Button className={s.buttonClass}>Download CV</Button>
                    </Fade>
                </div>
            </div>
        </section>
    );
};
