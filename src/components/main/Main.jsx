import { Button, FadeIn, Subtitle } from "common/components";
import { navigation } from "common/routes";
import React from "react";
import { HiHome } from "react-icons/hi";
import s from "./Main.module.scss";

export const Main = () => {
    return (
        <section className={s.sectionBlock} id={navigation.home}>
            <div className={s.container}>
                <Subtitle subtitle="Introduce" icon={<HiHome />} />
                <div className={s.innerContent}>
                    <div className={s.text}>
                        <FadeIn x={"0px"} y={"180px"}>
                            <h1>
                                Say Hi from <span>Golysheva Laura,</span> a Frontend Web Developer
                            </h1>
                        </FadeIn>
                        <FadeIn x={"0px"} y={"180px"}>
                            <p>I code beautifully simple things and I love what I do. Just simple like that!</p>
                        </FadeIn>
                    </div>
                </div>
                <FadeIn x={"0px"} y={"180px"} className={s.buttonWrapper}>
                    <Button className={s.buttonClass}>Download CV</Button>
                </FadeIn>
            </div>
        </section>
    );
};
