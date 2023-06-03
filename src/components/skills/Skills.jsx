import { Subtitle, Title } from "common/components";
import { navigation } from "common/routes";
import sContainer from "common/styles/container.module.scss";
import { Skill } from "components/skills/skill";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { SiCss3, SiHtml5, SiJavascript, SiMui, SiReact, SiRedux, SiTypescript } from "react-icons/si";
import s from "./Skills.module.scss";

export const Skills = () => {
    return (
        <section className={s.sectionBlock} id={navigation.skills}>
            <div className={`${s.container} ${sContainer.custom}`}>
                <Subtitle subtitle="My Skills" icon={<FaGraduationCap />} />
                <Title title="Tech" title2="Stack" />
                <div className={s.innerContent}>
                    <Skill title="JavaScript">
                        <SiJavascript />
                    </Skill>
                    <Skill title="HTML">
                        <SiHtml5 />
                    </Skill>
                    <Skill title="CSS">
                        <SiCss3 />
                    </Skill>
                    <Skill title="React">
                        <SiReact />
                    </Skill>
                    <Skill title="Redux/Toolkit">
                        <SiRedux />
                    </Skill>
                    <Skill title="Typescript">
                        <SiTypescript />
                    </Skill>
                    <Skill title="Material UI">
                        <SiMui />
                    </Skill>
                </div>
            </div>
        </section>
    );
};
